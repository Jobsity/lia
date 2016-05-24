import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {MdButton} from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-home-card',
  templateUrl: 'home-card.component.html',
  styleUrls: ['home-card.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES,  MdButton],
})
export class HomeCardComponent { }
