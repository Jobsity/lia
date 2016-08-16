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
    return builder.createAsync(TestApp).then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaInfoBlockComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));

  it('should be able to have base css class', inject([], () => {
    return builder.createAsync(TestApp).then((fixture: ComponentFixture<any>) => {
        let liaInfoBlock = fixture.debugElement.query(By.css('div'));

        expect(liaInfoBlock.nativeElement.classList.contains('lia-info-block')).toBeTruthy();
      });
  }));
  
  it('should be able to display language', inject([], () => {
    return builder.createAsync(TestApp).then((fixture: ComponentFixture<any>) => {
        let liaInfoLanguage = fixture.debugElement.query(By.css('lia-info-language'));
        
        expect(liaInfoLanguage.nativeElement.textContent).toBe('javascript');
      });
  }));

  it('should be able to display title', inject([], () => {
    return builder.createAsync(TestApp).then((fixture: ComponentFixture<any>) => {
        let liaInfoTitle = fixture.debugElement.query(By.css('lia-info-title'));

        expect(liaInfoTitle.nativeElement.textContent).toBe('Title');
      });
  }));

  it('should be able to display time', inject([], () => {
    return builder.createAsync(TestApp).then((fixture: ComponentFixture<any>) => {
        let liaInfoTime = fixture.debugElement.query(By.css('lia-info-time'));

        expect(liaInfoTime.nativeElement.textContent).toBe('5 minutes');
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <lia-info-block>
      <lia-info-language>javascript</lia-info-language>
      <lia-info-title>Title</lia-info-title>
      <lia-info-time>5 minutes</lia-info-time>
    </lia-info-block>
  `,
  directives: [LiaInfoBlockComponent]
})
class TestApp {}

