import { Routes, RouterModule }  from '@angular/router';
import { LiaSubmissionPageComponent } from './lia-submission-page.component';

export const liaSubmissionPageRoutes: Routes = [
  {
    path: 'launch',
    component: LiaSubmissionPageComponent
  }
];

export const liaSubmissionPageRouting = RouterModule.forChild(liaSubmissionPageRoutes);
