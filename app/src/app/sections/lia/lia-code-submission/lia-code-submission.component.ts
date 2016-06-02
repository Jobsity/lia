import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { Lia } from './../lia';
import { LIA_BUTTON_DIRECTIVES } from './../../../components/lia-button';
import { LIA_CARD_DIRECTIVES } from './../../../components/lia-card';

@Component({
  moduleId: module.id,
  selector: 'lia-code-submission',
  templateUrl: 'lia-code-submittion.component.html',
  styleUrls: ['lia-code-submittion.component.css'],
  directives: [FORM_DIRECTIVES, LIA_BUTTON_DIRECTIVES, LIA_CARD_DIRECTIVES]
})
export class LiaCodeSubmissionComponent {

  @Input() lia: Lia;
  @Output() onLiaSubmitted: EventEmitter<any> =  new EventEmitter();

  submitLia() {
    this.onLiaSubmitted.emit(this.lia);
  }

}
