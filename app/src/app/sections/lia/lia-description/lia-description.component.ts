import { Component, Input } from '@angular/core';
import { LiaTimerComponent } from './../lia-timer/lia-timer.component';
import { ILia } from './../lia';
import { LIA_CARD_DIRECTIVES } from './../../../components/lia-card';
import { LiaInfoBlockComponent } from './../../../components/lia-info-block';

@Component({
  moduleId: module.id,
  selector: 'lia-description',
  templateUrl: 'lia-description.component.html',
  styleUrls: ['lia-description.component.css'],
  directives: [
    LIA_CARD_DIRECTIVES,
    LiaTimerComponent,
    LiaInfoBlockComponent
  ]
})

export class LiaDescriptionComponent {
  @Input() lia: ILia;
}
