// models/galleryModel.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IGallery extends Document {
  title: string;
  imageUrl: string;
  createdAt: Date;
}

const GallerySchema = new Schema<IGallery>(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<IGallery>("Gallery", GallerySchema);