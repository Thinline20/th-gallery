import { bigserial, pgTable, pgTableCreator } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `th-gallery_${name}`);

export const users = createTable("users", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
});
