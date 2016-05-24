import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LiaCardComponent } from './sections/lia/lia-card';
import { HomeCardComponent } from './sections/home/home-card';

@Component({
  moduleId: module.id,
  selector: 'live-interview-app',
  templateUrl: 'live-interview.component.html',
  styleUrls: ['live-interview.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeCardComponent,
    useAsDefault: true
  },
  {
    path: '/users/:userId/lia/:liaId',
    name: 'LiaCard',
    component: LiaCardComponent
  }
])

export class LiveInterviewAppComponent {
  title = 'Welcome!';
}
