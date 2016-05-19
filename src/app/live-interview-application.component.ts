import { Component } from '@angular/core';

import {MdButton} from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'live-interview-application-app',
  templateUrl: 'live-interview-application.component.html',
  styleUrls: ['live-interview-application.component.css'],
  directives: [MD_CARD_DIRECTIVES,  MdButton]
})
export class LiveInterviewApplicationAppComponent {
  title = 'Hello World!';
}
