import { Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'lia-toast',
  templateUrl: 'lia-toast.component.html',
  styleUrls: ['lia-toast.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [NgClass]
})

export class LiaToastComponent implements OnChanges {
  @Input() msg: string;
  @Output() onChangeMsg = new EventEmitter();

  classNames: any;
  hideTimeoutId: number;

  constructor() {
    this.classNames = {
      'lia-toast': true,
      'open': false
    };
  }

  ngOnChanges(changes: any) {
    if ('msg' in changes && changes.msg.currentValue) {
      setTimeout(() => {
        this.classNames.open = true;
      }, 10);

      clearTimeout(this.hideTimeoutId);
      this.hideTimeoutId = setTimeout(() => {
        this.resetMsg();
      }, 5000);
    }
  }

  handleClickOnDismiss() {
    this.resetMsg();
    clearTimeout(this.hideTimeoutId);
  }

  resetMsg() {
    this.classNames.open = false;
    this.msg = '';
    this.onChangeMsg.emit({
      value: this.msg
    });
  }
}
