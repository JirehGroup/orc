// schemas/blogSchema.ts

import { z } from "zod";

export const BlogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  article: z.string().min(1, "Article content is required"),
  images: z.array(z.string().url("Invalid URL format")).optional(),  // Optional array of image URLs
});

export type BlogInput = z.infer<typeof BlogSchema>;