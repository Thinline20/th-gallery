import { sql } from "drizzle-orm";
import {
  bigserial,
  index,
  pgTable,
  pgTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `th-gallery_${name}`);

export const users = createTable("users", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
});

export const images = createTable(
  "images",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", { length: 1024 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (images) => ({
    nameIndex: index("name_idx").on(images.name),
  }),
);

export type Images = typeof images.$inferInsert;
