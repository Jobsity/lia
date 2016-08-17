import { Routes, RouterModule } from '@angular/router';
import { homePageRoutes } from './sections/home/home-page/home-page.routing';
import { liaLandingPageRoutes } from './sections/lia/lia-landing-page/lia-landing-page.routing';
import { liaSubmissionPageRoutes } from './sections/lia/lia-submission-page/lia-submission-page.routing';

const liaRoutes: Routes = [
  {
    path: 'users/:userId/lia/:liaId',
    children: [
      ...liaLandingPageRoutes,
      ...liaSubmissionPageRoutes
    ]
  }
];

const routes: Routes = [
  ...homePageRoutes,
  ...liaRoutes
];

export const routing = RouterModule.forRoot(routes);
