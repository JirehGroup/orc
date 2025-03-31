// models/galleryModels.ts

import mongoose, { Schema, Document } from "mongoose";

export interface IGallery extends Document {
  mediaType: "image" | "video";
  mediaUrl: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const GallerySchema: Schema = new Schema(
  {
    mediaType: { type: String, enum: ["image", "video"], required: true },
    mediaUrl: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IGallery>("Gallery", GallerySchema);
