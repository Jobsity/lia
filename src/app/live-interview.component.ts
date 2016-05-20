import { Component } from '@angular/core';

import {MdButton} from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'live-interview-app',
  templateUrl: 'live-interview.component.html',
  styleUrls: ['live-interview.component.css'],
  directives: [MD_CARD_DIRECTIVES,  MdButton]
})
export class LiveInterviewAppComponent {
  title = 'Hello World!';
}
