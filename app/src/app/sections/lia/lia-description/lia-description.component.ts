import { Component, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { LiaTimerComponent } from './../lia-timer/lia-timer.component';
import { Lia } from './../lia';

@Component({
  moduleId: module.id,
  selector: 'app-lia-description',
  templateUrl: 'lia-description.component.html',
  styleUrls: ['lia-description.component.css'],
  directives: [MD_CARD_DIRECTIVES, LiaTimerComponent]
})
export class LiaDescriptionComponent {

  @Input()
  lia: Lia;

  constructor() {}

}
