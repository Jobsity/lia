import { addProviders, inject, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LiaCodeSubmissionComponent } from './lia-code-submission.component';

describe('Component: LiaCodeSubmission', () => {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
    addProviders([LiaCodeSubmissionComponent]);
  }));

  it('should inject the component', inject([LiaCodeSubmissionComponent],
      (component: LiaCodeSubmissionComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LiaCodeSubmissionComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaCodeSubmissionComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <lia-code-submission></lia-code-submission>
  `,
  directives: [LiaCodeSubmissionComponent]
})
class LiaCodeSubmissionComponentTestController {
}

