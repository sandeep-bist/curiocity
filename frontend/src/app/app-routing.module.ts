import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './components/question-list/question-list.component';

const routes: Routes = [
  { path: '', component: QuestionListComponent },
  { path: 'questions', component: QuestionListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }