import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';

import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, ElementRef, provide } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LiaAceEditorComponent } from './lia-ace-editor.component';

xdescribe('Component: LiaAceEditor', () => {
  let builder: TestComponentBuilder;
  
  beforeEachProviders(() => [
    LiaAceEditorComponent,
    provide(ElementRef, {useValue: new MockElementRef()})
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([LiaAceEditorComponent],
      (component: LiaAceEditorComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TestApp).then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaAceEditorComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

class MockElementRef implements ElementRef {
  nativeElement: HTMLElement = document.createElement('div');
}

class MockAce {
  private el: any;

  edit(el) {
    this.el = el;
  }
}

@Component({
  selector: 'test',
  template: `
    <lia-ace-editor></lia-ace-editor>
  `,
  directives: [LiaAceEditorComponent]
})
class TestApp {

}

