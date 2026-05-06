import { type Config } from "drizzle-kit";

const dbUrl =
  process.env.DATABASE_URL ??
  "postgresql://placeholder:placeholder@localhost:5432/placeholder";

export default {
  schema: "./src/server/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl as string,
  },
  tablesFilter: ["goldpainting_*"],
} satisfies Config;
