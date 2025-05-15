import {
  pgTable,
  text,
  uuid,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const files = pgTable("files", {
  //creating ids
  id: uuid("id").defaultRandom().primaryKey(),

  //basic folder information
  name: text("name").notNull(),
  path: text("path").notNull(), //document /project/resume
  size: integer("size").notNull(),
  type: text("type").notNull(), //folder or file

  //storage information
  fileUrl: text("file_url").notNull(), //url to access file
  thumbnailUrl: text("thumbnail"),

  //ownership innformation
  userId: text("user_id").notNull(),
  parentId: uuid("parent_id"), //parent folder id null for root items

  //file folder flag
  isFolder: boolean("is_folder").default(false).notNull(),
  isStarred: boolean("is_starred").default(false).notNull(),
  isTrash: boolean("is_trash").default(false).notNull(),

  //timestamp (different in postgres)
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
