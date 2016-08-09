import { addProviders, inject, TestComponentBuilder, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LiaDescriptionComponent } from './lia-description.component';

describe('Component: LiaDescription', () => {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
    addProviders([LiaDescriptionComponent]);
  }));

  it('should inject the component', inject([LiaDescriptionComponent],
      (component: LiaDescriptionComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LiaDescriptionComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaDescriptionComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-lia-description></app-lia-description>
  `,
  directives: [LiaDescriptionComponent]
})
class LiaDescriptionComponentTestController {
}

