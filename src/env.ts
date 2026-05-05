import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    SMTP_SERVICE: z.string().min(1).default("gmail"),
    SMTP_USER: z.email().optional(),
    SMTP_PASS: z.string().min(1).optional(),
    SMTP_REJECT_UNAUTHORIZED: z
      .enum(["true", "false"])
      .default("true")
      .transform((value) => value === "true"),
    CONTACT_EMAIL_TO: z.email().default("arley75480@gmail.com"),
    CONTACT_EMAIL_FROM: z.email().optional(),
    GOOGLE_PLACES_API_KEY: z.string().min(1).optional(),
  },
  client: {
    NEXT_PUBLIC_FEATURABLE_WIDGET_ID: z.string().min(1).optional(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    SMTP_SERVICE: process.env.SMTP_SERVICE,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS ?? process.env.PASS,
    SMTP_REJECT_UNAUTHORIZED: process.env.SMTP_REJECT_UNAUTHORIZED,
    CONTACT_EMAIL_TO: process.env.CONTACT_EMAIL_TO,
    CONTACT_EMAIL_FROM: process.env.CONTACT_EMAIL_FROM,
    GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
    NEXT_PUBLIC_FEATURABLE_WIDGET_ID:
      process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
