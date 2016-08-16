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
import { LiaCardComponent } from './lia-card.component';

describe('Component: NewLiaCard', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [LiaCardComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([LiaCardComponent],
      (component: LiaCardComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TestApp)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaCardComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
  <lia-card>
    <card-title-group>
      <img card-img src="img/jobsity-icon.png" alt="Jobsity logo">
      <card-title>Title</card-title>
      <card-subtitle>Subtitle</card-subtitle>
    </card-title-group>
    <card-content>
      <p>Test content</p>
    </card-content>
    <card-actions>
      <button lia-button>LAUNCH TEST LIA</button>
    </card-actions>
  </lia-card>
  `,
  directives: [LiaCardComponent]
})
class TestApp {
}

