import { Component, OnInit, ElementRef, EventEmitter, Input, Output } from '@angular/core';

declare var ace: any;

@Component({
  moduleId: module.id,
  selector: 'lia-ace-editor',
  templateUrl: 'lia-ace-editor.component.html',
  styleUrls: ['lia-ace-editor.component.css']
})
export class LiaAceEditorComponent implements OnInit {

  private editor: any;
  private el: HTMLElement;

  @Output() onCodeChange =  new EventEmitter<string>();

  @Input()
  set language(value: string) {
    this.editor.getSession().setMode(`ace/mode/${value}`);
  }

  @Input()
  set theme(value: string) {
    this.editor.setTheme(`ace/theme/${value}`);
  }

  @Input()
  set code(value: string) {
    this.editor.setValue(value);
    this.editor.clearSelection();
    this.editor.focus();
  }

  constructor(private elementRef: ElementRef) {
    this.el = elementRef.nativeElement;

    this.el.classList.add('editor');
    this.editor = ace.edit(this.el);
  }

  ngOnInit() {
    // set ace editor configuration params
    this.editor.setOption('showPrintMargin', false);
    this.editor.gotoLine(3);

    this.editor.on('change', () => this.onCodeChange.next(this.editor.getValue()));
  }

}
