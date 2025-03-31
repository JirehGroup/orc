// schemas/eventSchema.ts

import { z } from "zod";

export const EventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  article: z.string().min(1, "Article content is required"),
  images: z.array(z.string().url("Invalid URL format")).optional(),
});

export type EventInput = z.infer<typeof EventSchema>;