import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent {
  question: Question = {
    title: '',
    description: '',
    author: ''
  };
  submitted = false;
  loading = false;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.question.title || !this.question.description || !this.question.author) {
      alert('Please fill all fields');
      return;
    }

    this.loading = true;
    this.questionService.createQuestion(this.question).subscribe({
      next: () => {
        this.submitted = true;
        this.loading = false;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      },
      error: (err) => {
        console.error('Error creating question:', err);
        alert('Failed to create question');
        this.loading = false;
      }
    });
  }
}