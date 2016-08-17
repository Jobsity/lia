import { Routes, RouterModule }  from '@angular/router';
import { LiaLandingPageComponent } from './lia-landing-page.component';

export const liaLandingPageRoutes: Routes = [
  {
    path: '',
    component: LiaLandingPageComponent
  }
];

export const liaLandingPageRouting = RouterModule.forChild(liaLandingPageRoutes);
