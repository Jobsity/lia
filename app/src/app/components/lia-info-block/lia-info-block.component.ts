import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lia-info-block',
  templateUrl: 'lia-info-block.component.html',
  styleUrls: ['lia-info-block.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LiaInfoBlockComponent {}
