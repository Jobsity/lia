import { addProviders, inject, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LiaLandingPageComponent } from './lia-landing-page.component';

describe('Component: LiaCard', () => {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
    addProviders([LiaLandingPageComponent]);
  }));

  it('should inject the component', inject([LiaLandingPageComponent],
      (component: LiaLandingPageComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LiaLandingPageComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaLandingPageComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-lia-landing-page></app-lia-landing-page>
  `,
  directives: [LiaLandingPageComponent]
})
class LiaLandingPageComponentTestController {
}

