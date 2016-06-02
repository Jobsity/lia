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
import { LiaInfoBlockComponent } from './lia-info-block.component';

describe('Component: LiaInfoBlock', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [LiaInfoBlockComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([LiaInfoBlockComponent],
      (component: LiaInfoBlockComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LiaInfoBlockComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaInfoBlockComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-lia-info-block></app-lia-info-block>
  `,
  directives: [LiaInfoBlockComponent]
})
class LiaInfoBlockComponentTestController {
}

