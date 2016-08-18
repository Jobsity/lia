import { Routes, RouterModule } from '@angular/router';
import { homePageRoutes } from './sections/home/home-page/home-page.routing';
import { liaRoutes } from './sections/lia/lia.routing';

const routes: Routes = [
  ...homePageRoutes,
  ...liaRoutes
];

export const routing = RouterModule.forRoot(routes);
