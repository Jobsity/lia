import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Lia } from '../lia';
import {MdButton} from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { LiaService } from './../lia.service';

@Component({
  moduleId: module.id,
  selector: 'app-lia-card',
  templateUrl: 'lia-card.component.html',
  styleUrls: ['lia-card.component.css'],
  directives: [MD_CARD_DIRECTIVES,  MdButton],
  providers: [LiaService]
})
export class LiaCardComponent implements OnInit {

  lia: Lia;

  constructor(private liaService: LiaService, private routeParams: RouteParams) {}

  ngOnInit() {
    let userId = +this.routeParams.get('userId');
    let liaId = +this.routeParams.get('liaId');
    this.liaService.getUserLia(userId, liaId).then(res => this.lia = res);
  }

  launchLIA(lia: Lia) {
    let userId = +this.routeParams.get('userId');
    this.liaService.launchLia(userId, lia).then(res => console.log(res));
  }

}
