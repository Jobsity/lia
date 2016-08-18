import { Routes, RouterModule }  from '@angular/router';
import { LiaLandingPageComponent } from './lia-landing-page/lia-landing-page.component';
import { LiaSubmissionPageComponent } from './lia-submission-page/lia-submission-page.component';

export const liaRoutes: Routes = [
  {
    path: 'users/:userId/lia/:liaId',
    children: [
      {
        path: '',
        component: LiaLandingPageComponent
      },
      {
        path: 'launch',
        component: LiaSubmissionPageComponent
      }
    ]
  }
];

export const liaRouting = RouterModule.forChild(liaRoutes);
