import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LiaAceEditorComponent } from './lia-ace-editor.component';

describe('Component: LiaAceEditor', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [LiaAceEditorComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([LiaAceEditorComponent],
      (component: LiaAceEditorComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LiaAceEditorComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaAceEditorComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-lia-ace-editor></app-lia-ace-editor>
  `,
  directives: [LiaAceEditorComponent]
})
class LiaAceEditorComponentTestController {
}

