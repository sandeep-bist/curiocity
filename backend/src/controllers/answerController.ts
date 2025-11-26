import { Request, Response } from 'express';
import { Answer } from '../models/Answer';
import { Question } from '../models/Question';

// Get all answers for a question
export const getAnswersByQuestionId = async (req: Request, res: Response) => {
  try {
    const answers = await Answer.find({ questionId: req.params.questionId }).sort({ createdAt: -1 });
    res.json(answers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch answers' });
  }
};

// Create a new answer
export const createAnswer = async (req: Request, res: Response) => {
  try {
    const { content, author, questionId } = req.body;

    if (!content || !author || !questionId) {
      return res.status(400).json({ error: 'Content, author, and questionId are required' });
    }

    // Check if question exists
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const answer = new Answer({ content, author, questionId });
    await answer.save();
    res.status(201).json(answer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create answer' });
  }
};

// Update an answer
export const updateAnswer = async (req: Request, res: Response) => {
  try {
    const { content } = req.body;
    const answer = await Answer.findByIdAndUpdate(
      req.params.id,
      { content },
      { new: true }
    );
    if (!answer) {
      return res.status(404).json({ error: 'Answer not found' });
    }
    res.json(answer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update answer' });
  }
};

// Delete an answer
export const deleteAnswer = async (req: Request, res: Response) => {
  try {
    const answer = await Answer.findByIdAndDelete(req.params.id);
    if (!answer) {
      return res.status(404).json({ error: 'Answer not found' });
    }
    res.json({ message: 'Answer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete answer' });
  }
};