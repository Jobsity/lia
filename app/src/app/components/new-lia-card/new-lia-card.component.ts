import { Component, Type, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'new-lia-card',
  templateUrl: 'new-lia-card.component.html',
  styleUrls: ['new-lia-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewLiaCardComponent {  }


@Component({
  moduleId: module.id,
  selector: 'card-title-group',
  templateUrl: 'card-title-group.component.html',
  styleUrls: ['new-lia-card.component.css']
})
export class CardTitleGroupComponent {  }

export const LIA_CARD_DIRECTIVES: Type[] = [NewLiaCardComponent, CardTitleGroupComponent];
