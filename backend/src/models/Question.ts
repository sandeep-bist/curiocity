import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestion extends Document {
  title: string;
  description: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const questionSchema = new Schema<IQuestion>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);

export const Question = mongoose.model<IQuestion>('Question', questionSchema);