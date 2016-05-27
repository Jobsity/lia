import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Lia } from './../lia';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-lia-code-submittion',
  templateUrl: 'lia-code-submittion.component.html',
  styleUrls: ['lia-code-submittion.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton]
})
export class LiaCodeSubmittionComponent {

  @Input() lia: Lia;
  @Output() onLiaSubmitted: EventEmitter<any> =  new EventEmitter();

  constructor() {}

  submitLia() {
    this.onLiaSubmitted.emit(this.lia);
  }

}
