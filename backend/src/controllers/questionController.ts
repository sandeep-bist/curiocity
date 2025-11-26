import { Request, Response } from 'express';
import { Question } from '../models/Question';

// Get all questions
export const getAllQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

// Get single question by ID
export const getQuestionById = async (req: Request, res: Response) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch question' });
  }
};

// Create a new question
export const createQuestion = async (req: Request, res: Response) => {
  try {
    const { title, description, author } = req.body;

    if (!title || !description || !author) {
      return res.status(400).json({ error: 'Title, description, and author are required' });
    }

    const question = new Question({ title, description, author });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create question' });
  }
};

// Update a question
export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const question = await Question.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update question' });
  }
};

// Delete a question
export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete question' });
  }
};