import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'button[lia-button]',
  templateUrl: 'lia-button.component.html',
  styleUrls: ['lia-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LiaButtonComponent {  }
