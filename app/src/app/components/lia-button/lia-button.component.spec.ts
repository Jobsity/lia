import { addProviders, inject, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LiaButtonComponent } from './lia-button.component';

describe('Component: LiaButton', () => {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
    addProviders([LiaButtonComponent]);
  }));

  it('should inject the component', inject([LiaButtonComponent],
      (component: LiaButtonComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LiaButtonComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaButtonComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-lia-button></app-lia-button>
  `,
  directives: [LiaButtonComponent]
})
class LiaButtonComponentTestController {
}

