import { Component, ChangeDetectionStrategy, ViewEncapsulation, Type } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'button[lia-button]',
  templateUrl: 'lia-button.component.html',
  styleUrls: ['lia-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LiaButtonComponent {  }

@Component({
  moduleId: module.id,
  selector: 'a[lia-button-link]',
  templateUrl: 'lia-button-link.component.html',
  styleUrls: ['lia-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LiaButtonLinkComponent {  }

export const LIA_BUTTON_DIRECTIVES: Type[] = [LiaButtonComponent, LiaButtonLinkComponent];
