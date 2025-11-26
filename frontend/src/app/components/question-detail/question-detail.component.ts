import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { AnswerService } from '../../services/answer.service';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';

@Component({
  selector: 'app-question-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: Question | null = null;
  answers: Answer[] = [];
  newAnswer: Answer = {
    content: '',
    author: '',
    questionId: ''
  };
  loading = true;
  submittingAnswer = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private answerService: AnswerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadQuestion(id);
      this.loadAnswers(id);
    }
  }

  loadQuestion(id: string): void {
    this.questionService.getQuestionById(id).subscribe({
      next: (data) => {
        this.question = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading question:', err);
        this.loading = false;
      }
    });
  }

  loadAnswers(questionId: string): void {
    this.answerService.getAnswersByQuestionId(questionId).subscribe({
      next: (data) => {
        this.answers = data;
      },
      error: (err) => {
        console.error('Error loading answers:', err);
      }
    });
  }

  submitAnswer(): void {
    if (!this.newAnswer.content || !this.newAnswer.author) {
      alert('Please fill all fields');
      return;
    }

    const questionId = this.route.snapshot.paramMap.get('id');
    if (!questionId) return;

    this.newAnswer.questionId = questionId;
    this.submittingAnswer = true;

    this.answerService.createAnswer(this.newAnswer).subscribe({
      next: (answer) => {
        this.answers.push(answer);
        this.newAnswer = {
          content: '',
          author: '',
          questionId: ''
        };
        this.submittingAnswer = false;
      },
      error: (err) => {
        console.error('Error submitting answer:', err);
        alert('Failed to submit answer');
        this.submittingAnswer = false;
      }
    });
  }

  deleteAnswer(id: string): void {
    if (confirm('Delete this answer?')) {
      this.answerService.deleteAnswer(id).subscribe({
        next: () => {
          this.answers = this.answers.filter(a => a._id !== id);
        },
        error: (err) => console.error('Error deleting answer:', err)
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}