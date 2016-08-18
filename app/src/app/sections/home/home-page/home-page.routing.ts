import { Routes, RouterModule }  from '@angular/router';
import { HomePageComponent } from './home-page.component';

export const homePageRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

export const homePageRouting = RouterModule.forChild(homePageRoutes);
