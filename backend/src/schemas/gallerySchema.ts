// schemas/gallerySchema.ts

import { z } from "zod";

export const GallerySchema = z.object({
  mediaType: z.enum(["image", "video"]).refine((val) => ["image", "video"].includes(val), {
    message: "Invalid media type",
  }),
  mediaUrl: z.string().url("Invalid URL format"),
  description: z.string().optional(),
});

export type GalleryInput = z.infer<typeof GallerySchema>;