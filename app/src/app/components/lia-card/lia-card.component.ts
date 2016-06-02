import { Component, Type, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lia-card',
  templateUrl: 'lia-card.component.html',
  styleUrls: ['lia-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiaCardComponent {  }


@Component({
  moduleId: module.id,
  selector: 'card-title-group',
  templateUrl: 'card-title-group.component.html',
  styleUrls: ['lia-card.component.css']
})
export class CardTitleGroupComponent {  }

export const LIA_CARD_DIRECTIVES: Type[] = [LiaCardComponent, CardTitleGroupComponent];
