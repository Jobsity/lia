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
import { LiaButtonComponent, LiaButtonLinkComponent } from './lia-button.component';

describe('Component: LiaButton', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [LiaButtonComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([LiaButtonComponent],
      (component: LiaButtonComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the lia-button component', inject([], () => {
    return builder.createAsync(TestApp).then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaButtonComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));

  it('should contain base css class', inject([], () => {
    return builder.createAsync(TestApp).then((fixture: ComponentFixture<any>) => {
      let buttonDebugElement = fixture.debugElement.query(By.css('span'));

      expect(buttonDebugElement.nativeElement.classList.contains('button')).toBeTruthy();
    });
  }));

  it('should be able to display button text', inject([], () => {
    return builder.createAsync(TestApp).then((fixture: ComponentFixture<any>) => {
      let buttonDebugElement = fixture.debugElement.query(By.css('span'));

      expect(buttonDebugElement.nativeElement.textContent).toBe('Click Me');
    });
  }));

  it('should not increment if disabled', inject([], () => {
    return builder.createAsync(TestApp).then((fixture: ComponentFixture<any>) => {
      let testComponent = fixture.debugElement.componentInstance;
      let buttonDebugElement = fixture.debugElement.query(By.css('button'));

      fixture.detectChanges();

      buttonDebugElement.nativeElement.click();
      expect(testComponent.clickCount).toBe(0);
    });
  }));

  describe('a[lia-button-link]', () => {
    it('should contain desired css styling', inject([], () => {
      return builder.createAsync(TestApp).then((fixture: ComponentFixture<any>) => {
        let buttonDebugElement = fixture.debugElement.query(By.css('a span'));
        expect(buttonDebugElement.nativeElement.classList.contains('dash')).toBeTruthy();
      });
    }));
  });

});

@Component({
  selector: 'test-app',
  template: `
    <button type="button" [disabled]="isDisabled" lia-button (click)="increment()">Click Me</button>
    <a href="#" lia-button-link>Link button</a>
  `,
  directives: [LiaButtonComponent, LiaButtonLinkComponent]
})
class TestApp {
  clickCount: number = 0;
  isDisabled: boolean = true;

  increment() {
    this.clickCount++;
  }
}

