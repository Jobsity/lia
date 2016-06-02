import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnChanges } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { Lia } from './../lia';
import { LIA_BUTTON_DIRECTIVES } from './../../../components/lia-button';
import { LIA_CARD_DIRECTIVES } from './../../../components/lia-card';

import { LiaAceEditorComponent } from './../../../components/lia-ace-editor';

@Component({
  moduleId: module.id,
  selector: 'lia-code-submission',
  templateUrl: 'lia-code-submission.component.html',
  styleUrls: ['lia-code-submission.component.css'],
  directives: [
    FORM_DIRECTIVES,
    LIA_BUTTON_DIRECTIVES,
    LIA_CARD_DIRECTIVES,
    LiaAceEditorComponent
  ],
  encapsulation: ViewEncapsulation.None
})
export class LiaCodeSubmissionComponent implements OnChanges {
  
  @Input() lia: Lia;
  @Output() onLiaSubmitted: EventEmitter<any> =  new EventEmitter();
  code: string;

  ngOnChanges() {
    // base 64 decode snippet code
    this.code = (this.lia && this.lia.snippet_code) ? atob(this.lia.snippet_code): '// Write your solution here';
  }

  submitLia() {
    // base64 encode submitted code 
    this.lia.submitted_code = btoa(this.lia.submitted_code);
    this.onLiaSubmitted.emit(this.lia);
  }

  onChange(codeValue: string) {
    this.lia.submitted_code = codeValue;
  }
}
