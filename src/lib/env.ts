import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  client: {

  },
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  },
  clientPrefix: "PUBLIC_",
  runtimeEnv: process.env,
})