import {
  FunctionCallingConfigMode,
  GoogleGenAI,
  type Content,
  type FunctionCall,
  type FunctionDeclaration,
} from '@google/genai';
import { z } from 'zod';

import { env } from '~/env';
import { sendServiceAppointmentEmail } from '~/server/email';

const genAI = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });
const model = 'gemini-2.5-flash-lite';
const maxHistoryMessages = 12;
const serviceTimeWindows = ['8:00 AM - 10:00 AM', '4:00 PM - 6:00 PM'] as const;
const serviceAppointmentToolName = 'createServiceAppointment';
const serviceAppointmentToolSchema = z.object({
  fullName: z.string().trim().min(2).describe("The customer's full name."),
  phone: z
    .string()
    .trim()
    .min(7)
    .describe("The customer's best phone number for confirming the visit."),
  email: z
    .string()
    .trim()
    .optional()
    .describe("The customer's email address, if they provided one."),
  serviceAddress: z
    .string()
    .trim()
    .min(5)
    .describe('The full street address where the painting service is needed.'),
  serviceNeeded: z
    .string()
    .trim()
    .min(2)
    .describe('The painting service the customer needs.'),
  requestedDate: z
    .string()
    .trim()
    .min(2)
    .describe('The service date requested by the customer.'),
  preferredTimeWindow: z
    .enum(serviceTimeWindows)
    .describe('The appointment window selected by the customer.'),
  notes: z
    .string()
    .trim()
    .optional()
    .describe('Any extra customer notes or project details.'),
});

const chatRequestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string().trim().min(1),
      })
    )
    .min(1),
});

const createServiceAppointmentDeclaration: FunctionDeclaration = {
  name: serviceAppointmentToolName,
  description:
    'Send a Gold Lion Painting service appointment request email to goldlionpainting@gmail.com after the customer provides all required scheduling details.',
  parametersJsonSchema: {
    type: 'object',
    additionalProperties: false,
    properties: {
      fullName: {
        type: 'string',
        description: "The customer's full name.",
      },
      phone: {
        type: 'string',
        description:
          "The customer's best phone number for confirming the visit.",
      },
      email: {
        type: 'string',
        description: "The customer's email address, if they provided one.",
      },
      serviceAddress: {
        type: 'string',
        description:
          'The full street address where the painting service is needed.',
      },
      serviceNeeded: {
        type: 'string',
        description: 'The painting service the customer needs.',
      },
      requestedDate: {
        type: 'string',
        description: 'The service date requested by the customer.',
      },
      preferredTimeWindow: {
        type: 'string',
        enum: serviceTimeWindows,
        description: 'The appointment window selected by the customer.',
      },
      notes: {
        type: 'string',
        description: 'Any extra customer notes or project details.',
      },
    },
    required: [
      'fullName',
      'phone',
      'serviceAddress',
      'serviceNeeded',
      'requestedDate',
      'preferredTimeWindow',
    ],
  },
};

export const maxDuration = 30;

type ChatMessage = z.infer<typeof chatRequestSchema>['messages'][number];

function getEasternDateParts(date: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(date);

  return {
    year: Number(parts.find((part) => part.type === 'year')?.value),
    month: Number(parts.find((part) => part.type === 'month')?.value),
    day: Number(parts.find((part) => part.type === 'day')?.value),
  };
}

function formatServiceDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

function getSchedulingContext() {
  const now = new Date();
  const todayParts = getEasternDateParts(now);
  const tomorrow = new Date(
    Date.UTC(todayParts.year, todayParts.month - 1, todayParts.day + 1, 12)
  );

  return {
    today: formatServiceDate(now),
    tomorrow: formatServiceDate(tomorrow),
  };
}

function getSystemInstruction() {
  const schedulingContext = getSchedulingContext();

  return `You are the virtual sales assistant for "Gold Lion Painting," a professional painting company based in Sarasota, Florida.

COMPANY INFO:
- Name: Gold Lion Painting
- Phone: (941) 462-5894
- Email: goldlionpainting@gmail.com
- Services: Residential and commercial painting, interior and exterior. Also cabinets, decks, fences, and wood floor staining.
- Coverage: Sarasota, Lakewood Ranch, Bradenton, Siesta Key, Longboat Key, and nearby areas.
- Estimates: Free, no obligation.
- Scheduling date context for Sarasota, Florida: today is ${schedulingContext.today}; tomorrow is ${schedulingContext.tomorrow}.

GUIDELINES:
- Be friendly, professional, and persuasive. Goal is to convert leads into customers.
- When asked about pricing, NEVER give exact numbers. Say: "The price depends on the size and condition of the surface. The best way to get an accurate quote is with a free, no-obligation estimate!"
- Always encourage scheduling a free estimate or calling (941) 462-5894.
- Mention they use high-quality paint and their work is backed by a warranty.
- ALWAYS respond in English, regardless of the language the customer writes in.
- Keep responses short (2-4 sentences) with a warm but professional tone.
- If asked about availability, offer these service appointment windows: tomorrow (${schedulingContext.tomorrow}) from 8:00 AM to 10:00 AM or from 4:00 PM to 6:00 PM.

SERVICE APPOINTMENT INSTRUCTIONS:
- If the customer says they want painting service, wants to book, wants an appointment, or wants someone to come out, collect these details before sending anything: full name, best phone number, full service address, service needed, requested service date, and one preferred time window.
- The standard available windows are always 8:00 AM - 10:00 AM or 4:00 PM - 6:00 PM. If the customer asks for tomorrow, use ${schedulingContext.tomorrow}. If they need a different day, ask which day and still offer one of those two windows.
- Ask for missing details one or two at a time. Do not ask the customer to repeat details they already gave.
- Do not call the appointment tool until the customer provided the required details and selected one of the two time windows.
- After the appointment tool succeeds, tell the customer the service appointment request was sent to goldlionpainting@gmail.com and that the team will confirm the visit. If it fails, apologize briefly and ask them to call (941) 462-5894.`;
}

function toGenAIHistory(messages: ChatMessage[]): Content[] {
  return messages.slice(-maxHistoryMessages).map((message) => ({
    role: message.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: message.content }],
  }));
}

async function executeServiceAppointment(functionCall: FunctionCall) {
  if (functionCall.name !== serviceAppointmentToolName) {
    return {
      ok: false,
      error: 'UNKNOWN_TOOL',
    };
  }

  const appointment = serviceAppointmentToolSchema.parse(
    functionCall.args ?? {}
  );
  const result = await sendServiceAppointmentEmail({
    ...appointment,
    email: appointment.email || undefined,
  });

  if (!result.success) {
    return {
      ok: false,
      error: result.error?.code ?? 'EMAIL_ERROR',
    };
  }

  return {
    ok: true,
    sentTo: 'goldlionpainting@gmail.com',
    requestedDate: appointment.requestedDate,
    preferredTimeWindow: appointment.preferredTimeWindow,
  };
}

export async function POST(req: Request) {
  try {
    const payload = chatRequestSchema.parse(await req.json());
    const history = toGenAIHistory(payload.messages.slice(0, -1));
    const latestMessage = payload.messages.at(-1)!;
    const chat = genAI.chats.create({
      model,
      history,
      config: {
        systemInstruction: getSystemInstruction(),
        temperature: 0.4,
        maxOutputTokens: 350,
        tools: [
          {
            functionDeclarations: [createServiceAppointmentDeclaration],
          },
        ],
        toolConfig: {
          functionCallingConfig: {
            mode: FunctionCallingConfigMode.AUTO,
          },
        },
      },
    });

    const firstResponse = await chat.sendMessage({
      message: latestMessage.content,
    });
    const functionCall = firstResponse.functionCalls?.[0];

    if (functionCall) {
      const toolResult = await executeServiceAppointment(functionCall);
      const finalResponse = await chat.sendMessage({
        message: [
          {
            functionResponse: {
              id: functionCall.id,
              name: functionCall.name,
              response: toolResult,
            },
          },
        ],
      });

      return Response.json({ message: finalResponse.text ?? '' });
    }

    return Response.json({ message: firstResponse.text ?? '' });
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      {
        error: 'Error processing your request',
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
