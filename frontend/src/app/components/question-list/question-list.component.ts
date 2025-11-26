import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [];
  loading = false;

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.loading = true;
    this.questionService.getAllQuestions().subscribe({
      next: (data) => {
        this.questions = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading questions:', err);
        this.loading = false;
      }
    });
  }

  deleteQuestion(id: string | undefined): void {
    if (!id) return;
    if (confirm('Are you sure you want to delete this question?')) {
      this.questionService.deleteQuestion(id).subscribe({
        next: () => {
          this.loadQuestions();
        },
        error: (err) => {
          console.error('Error deleting question:', err);
        }
      });
    }
  }

  viewQuestion(id: string | undefined): void {
    if (id) {
      this.router.navigate(['/question', id]);
    }
  }

  askQuestion(): void {
    this.router.navigate(['/ask']);
  }
}
