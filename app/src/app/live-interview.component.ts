import { Component } from '@angular/core';
import { LiaService } from './sections/lia/lia.service';
import { AuthService } from './sections/auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'live-interview-app',
  templateUrl: 'live-interview.component.html',
  styleUrls: ['live-interview.component.css'],
  providers: [
    AuthService,
    LiaService
  ]
})
export class LiveInterviewAppComponent {
  title = 'Welcome!';
}
