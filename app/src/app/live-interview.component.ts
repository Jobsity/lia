import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HomeCardComponent } from './sections/home/home-card';
import { LiaCardComponent } from './sections/lia/lia-card';
import { LiaPageComponent } from './sections/lia/lia-page';
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
    component: HomeCardComponent,
    useAsDefault: true
  },
  {
    path: '/users/:userId/lia/:liaId',
    name: 'LiaCard',
    component: LiaCardComponent
  },
  {
    path: '/users/:userId/lia/:liaId/launch',
    name: 'LiaPage',
    component: LiaPageComponent
  }
])

export class LiveInterviewAppComponent {
  title = 'Welcome!';
}
