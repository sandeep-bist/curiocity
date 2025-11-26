import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { QuestionListComponent } from './components/question-list/question-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Q&A Application';

  constructor(private router: Router) {}

  navigateToAsk(): void {
    this.router.navigate(['/ask']);
  }
}
