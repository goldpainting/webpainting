import { NextResponse } from "next/server";
import { z } from "zod";

import { sendEstimateEmail } from "~/server/email";

export const runtime = "nodejs";

const estimateRequestSchema = z.object({
  name: z.string().trim().min(2),
  phone: z.string().trim().min(7),
  email: z.email(),
  date: z.string().trim().optional().default(""),
  message: z.string().trim().min(5),
  source: z.string().trim().optional(),
});

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json();
    const parsed = estimateRequestSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "VALIDATION_ERROR" },
        { status: 400 },
      );
    }

    const result = await sendEstimateEmail(parsed.data);

    if (!result.success) {
      const status = result.error?.code === "MISSING_SMTP_CONFIG" ? 503 : 500;

      return NextResponse.json(
        { ok: false, error: result.error?.code ?? "EMAIL_ERROR" },
        { status },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "REQUEST_ERROR" },
      { status: 400 },
    );
  }
}
