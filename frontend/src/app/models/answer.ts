export interface Answer {
  _id?: string;
  content: string;
  author: string;
  questionId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
