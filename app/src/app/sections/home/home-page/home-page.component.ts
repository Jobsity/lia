import { Component } from '@angular/core';
import { LIA_CARD_DIRECTIVES } from '../../../components/lia-card';
import { LIA_BUTTON_DIRECTIVES } from './../../../components/lia-button';
import { LiaInfoBlockComponent } from './../../../components/lia-info-block';

@Component({
  moduleId: module.id,
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.css'],
  directives: [
    LIA_CARD_DIRECTIVES,
    LIA_BUTTON_DIRECTIVES,
    LiaInfoBlockComponent
  ]
})
export class HomePageComponent { }
