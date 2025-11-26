import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database';
import questionRoutes from './routes/questionRoutes';
import answerRoutes from './routes/answerRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Routes
app.use('/api/questions', questionRoutes);
app.use('/api/answers', answerRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});