
import { Routes } from '@angular/router';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';

export const routes: Routes = [
  { path: '', component: QuestionListComponent },
  { path: 'ask', component: AskQuestionComponent },
  { path: 'question/:id', component: QuestionDetailComponent },
  { path: '**', redirectTo: '' }
];
