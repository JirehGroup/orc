// models/newsModels.ts

import mongoose, { Schema, Document } from "mongoose";

export interface INews extends Document {
  title: string;
  description: string;
  content: string;
  images: string[];
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const NewsSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    images: [{ type: String }],
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<INews>("News", NewsSchema);
