import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HomePageComponent } from './sections/home/home-page';
import { LiaLandingPageComponent } from './sections/lia/lia-landing-page';
import { LiaSubmissionPageComponent } from './sections/lia/lia-submission-page';
import { LiaService } from './sections/lia/lia.service';

@Component({
  moduleId: module.id,
  selector: 'live-interview-app',
  templateUrl: 'live-interview.component.html',
  styleUrls: ['live-interview.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, LiaService]
})

@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomePageComponent,
    useAsDefault: true
  },
  {
    path: '/users/:userId/lia/:liaId',
    name: 'LiaLandingPage',
    component: LiaLandingPageComponent
  },
  {
    path: '/users/:userId/lia/:liaId/launch',
    name: 'LiaSubmissionPage',
    component: LiaSubmissionPageComponent
  }
])

export class LiveInterviewAppComponent {
  title = 'Welcome!';
}
