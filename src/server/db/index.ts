import { createPool } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

import * as schema from "./schema";
import { env } from "~/lib/env";

const pool = createPool({
  connectionString: env.POSTGRES_URL,
});

export const db = drizzle(pool, { schema: schema });
