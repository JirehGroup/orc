// schemas/newsSchema.ts
import { z } from "zod";

export const NewsSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  content: z.string().min(1, "Content is required"),
  images: z.array(z.string().url("Invalid URL format")).optional(),
  date: z.string().optional(),
});

export type NewsInput = z.infer<typeof NewsSchema>;
