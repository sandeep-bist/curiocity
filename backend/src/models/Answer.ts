import mongoose, { Schema, Document } from 'mongoose';

export interface IAnswer extends Document {
  content: string;
  author: string;
  questionId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const answerSchema = new Schema<IAnswer>(
  {
    content: { type: String, required: true },
    author: { type: String, required: true },
    questionId: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
  },
  { timestamps: true }
);

export const Answer = mongoose.model<IAnswer>('Answer', answerSchema);