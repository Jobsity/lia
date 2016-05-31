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
import { LiaCodeSubmittionComponent } from './lia-code-submittion.component';

describe('Component: LiaCodeSubmittion', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [LiaCodeSubmittionComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([LiaCodeSubmittionComponent],
      (component: LiaCodeSubmittionComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LiaCodeSubmittionComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaCodeSubmittionComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-lia-code-submittion></app-lia-code-submittion>
  `,
  directives: [LiaCodeSubmittionComponent]
})
class LiaCodeSubmittionComponentTestController {
}

