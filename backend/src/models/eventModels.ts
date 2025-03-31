// models/eventModels.ts

import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
  title: string;
  description: string;
  article: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    article: { type: String, required: true },
    images: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model<IEvent>("Event", EventSchema);
