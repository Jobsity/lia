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
import { LiaDescriptionComponent } from './lia-description.component';

describe('Component: LiaDescription', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [LiaDescriptionComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([LiaDescriptionComponent],
      (component: LiaDescriptionComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TestApp)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaDescriptionComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));

  it('should be able to display title', inject([], () => {
    return builder.createAsync(TestApp)
      .then((fixture: ComponentFixture<any>) => {
        fixture.detectChanges();
        let titleElement = fixture.debugElement.query(By.css('lia-info-title'));
        
        expect(titleElement.nativeElement.textContent).toBe('Test title');
      });
  }));

  it('should be able to display language', inject([], () => {
    return builder.createAsync(TestApp)
      .then((fixture: ComponentFixture<any>) => {
        fixture.detectChanges();
        let languageElement = fixture.debugElement.query(By.css('lia-info-language'));

        expect(languageElement.nativeElement.textContent).toBe('javascript');
      });
  }));

  it('should be able to display description', inject([], () => {
    return builder.createAsync(TestApp)
      .then((fixture: ComponentFixture<any>) => {
        fixture.detectChanges();
        let descriptionElement = fixture.debugElement.query(By.css('card-content p'));
        
        expect(descriptionElement.nativeElement.textContent).toBe('Test description');
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <lia-description [lia]="mockLia"></lia-description>
  `,
  directives: [LiaDescriptionComponent]
})
class TestApp {
  mockLia: any = {
    language: 'javascript',
    title: 'Test title',
    time: 10,
    description: 'Test description'
  };
}

