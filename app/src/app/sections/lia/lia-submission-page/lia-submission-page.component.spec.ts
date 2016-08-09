import { addProviders, inject, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LiaSubmissionPageComponent } from './lia-submission-page.component';

describe('Component: LiaSubmissionPage', () => {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
    addProviders([LiaSubmissionPageComponent]);
  }));

  it('should inject the component', inject([LiaSubmissionPageComponent],
      (component: LiaSubmissionPageComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LiaSubmissionPageComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaSubmissionPageComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <lia-submission-page></lia-submission-page>
  `,
  directives: [LiaSubmissionPageComponent]
})
class LiaSubmissionPageComponentTestController {
}

