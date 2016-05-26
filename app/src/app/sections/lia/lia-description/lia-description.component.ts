import { Component, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { Lia } from './../lia';

@Component({
  moduleId: module.id,
  selector: 'app-lia-description',
  templateUrl: 'lia-description.component.html',
  styleUrls: ['lia-description.component.css'],
  directives: [MD_CARD_DIRECTIVES]
})
export class LiaDescriptionComponent {

  @Input()
  lia: Lia;
  
  constructor() {}

}
