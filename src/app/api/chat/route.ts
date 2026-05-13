import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { env } from "~/env";

const genAI = createGoogleGenerativeAI({ apiKey: env.GEMINI_API_KEY });

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = await streamText({
      model: genAI("gemini-2.5-flash-lite"),
      system: `You are the virtual sales assistant for "Gold Lion Painting," a professional painting company based in Sarasota, Florida.

COMPANY INFO:
- Name: Gold Lion Painting
- Phone: (941) 462-5894
- Email: Goldlionpainting@gmail.com
- Services: Residential and commercial painting, interior and exterior. Also cabinets, decks, fences, and wood floor staining.
- Coverage: Sarasota, Lakewood Ranch, Bradenton, Siesta Key, Longboat Key, and nearby areas.
- Estimates: Free, no obligation.

GUIDELINES:
- Be friendly, professional, and persuasive. Goal is to convert leads into customers.
- When asked about pricing, NEVER give exact numbers. Say: "The price depends on the size and condition of the surface. The best way to get an accurate quote is with a free, no-obligation estimate!"
- Always encourage scheduling a free estimate or calling (941) 462-5894.
- Mention they use high-quality paint and their work is backed by a warranty.
- ALWAYS respond in English, regardless of the language the customer writes in.
- Keep responses short (2-4 sentences) with a warm but professional tone.
- If asked about availability, say they are currently scheduling projects and the best way to check is by phone.`,
      messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({
        error: "Error processing your request",
        detail: error instanceof Error ? error.message : String(error),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
