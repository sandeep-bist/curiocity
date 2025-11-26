import { Router } from 'express';
import {
  getAnswersByQuestionId,
  createAnswer,
  updateAnswer,
  deleteAnswer,
} from '../controllers/answerController';

const router = Router();

router.get('/question/:questionId', getAnswersByQuestionId);
router.post('/', createAnswer);
router.put('/:id', updateAnswer);
router.delete('/:id', deleteAnswer);

export default router;