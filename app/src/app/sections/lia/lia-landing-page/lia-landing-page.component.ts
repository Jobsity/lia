import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { Lia } from '../lia';
import { LiaService } from './../lia.service';

import { LIA_BUTTON_DIRECTIVES } from './../../../components/lia-button';
import { LIA_CARD_DIRECTIVES } from '../../../components/lia-card';
import { LiaInfoBlockComponent } from './../../../components/lia-info-block';

@Component({
  moduleId: module.id,
  selector: 'app-lia-landing-page',
  templateUrl: 'lia-landing-page.component.html',
  styleUrls: ['lia-landing-page.component.css'],
  directives: [LIA_BUTTON_DIRECTIVES, LIA_CARD_DIRECTIVES, LiaInfoBlockComponent]
})
export class LiaLandingPageComponent implements OnInit {

  lia: Lia;

  constructor(private liaService: LiaService,
              private routeParams: RouteParams,
              private router: Router ) {}

  ngOnInit() {
    let userId = +this.routeParams.get('userId');
    let liaId = +this.routeParams.get('liaId');
    this.liaService.getUserLia(userId, liaId).then(res => this.lia = res);
  }

  launchLIA(lia: Lia) {
    let userId = +this.routeParams.get('userId');
    this.liaService.launchLia(userId, lia).then(res => {
      let link = ['LiaPage', { userId: userId, liaId: lia.id }];
      this.router.navigate(link);
    });
  }
}
