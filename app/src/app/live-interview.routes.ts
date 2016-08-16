import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './sections/home/home-page';
import { LiaLandingPageComponent } from './sections/lia/lia-landing-page';
import { LiaSubmissionPageComponent } from './sections/lia/lia-submission-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
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

export const routing = RouterModule.forRoot(routes);
