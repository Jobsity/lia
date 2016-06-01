import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LIA_CARD_DIRECTIVES } from './../../../components/new-lia-card';
import { LIA_BUTTON_DIRECTIVES } from './../../../components/lia-button';
import { LiaInfoBlockComponent } from './../../../components/lia-info-block';

@Component({
  moduleId: module.id,
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    LIA_CARD_DIRECTIVES,
    LIA_BUTTON_DIRECTIVES,
    LiaInfoBlockComponent
  ]
})
export class HomePageComponent { }
