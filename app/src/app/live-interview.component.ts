import { Component } from '@angular/core';

import { LiaCardComponent } from './sections/lia/lia-card';

@Component({
  moduleId: module.id,
  selector: 'live-interview-app',
  templateUrl: 'live-interview.component.html',
  styleUrls: ['live-interview.component.css'],
  directives: [LiaCardComponent]
})
export class LiveInterviewAppComponent {
  title = 'Welcome!';
}
