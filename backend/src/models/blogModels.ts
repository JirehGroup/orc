// models/blogModels.ts

import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  description: string;
  article: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    article: { type: String, required: true },
    images: [{ type: String }],
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<IBlog>("Blog", BlogSchema);