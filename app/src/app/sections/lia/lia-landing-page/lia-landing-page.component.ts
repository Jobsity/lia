import { Component, OnInit } from '@angular/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Lia } from '../lia';
import { LiaService } from './../lia.service';
import { LIA_BUTTON_DIRECTIVES } from './../../../components/lia-button';
import { LIA_CARD_DIRECTIVES } from '../../../components/lia-card';
import { LiaInfoBlockComponent } from './../../../components/lia-info-block';

import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-lia-landing-page',
  templateUrl: 'lia-landing-page.component.html',
  styleUrls: ['lia-landing-page.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    LIA_BUTTON_DIRECTIVES,
    LIA_CARD_DIRECTIVES,
    LiaInfoBlockComponent
  ]
})
export class LiaLandingPageComponent implements OnInit {

  lia: Lia;
  title: string;
  userId: number;
  liaId: number;

  constructor(private liaService: LiaService,
              private routeParams: RouteParams,
              private router: Router ) {}

  ngOnInit() {
    this.userId = +this.routeParams.get('userId');
    this.liaId = +this.routeParams.get('liaId');
    this.liaService.getUserLia(this.userId, this.liaId).then(res => {
      this.lia = res;
      this.setCardTitle(this.lia);
    });
  }

  isLiaJustSubmitted():boolean {
    return moment(new Date()).diff(moment(this.lia.submitted_at), 'minutes') <= 15;
  }

  private setCardTitle(lia: Lia) {
    if (lia.state === 'in_progress') {
      this.title = 'Continue your work';
    } else if (lia.state === 'submitted') {
      this.title = 'Thank you';
    } else {
      this.title = 'Welcome to Jobsity Live Coding';
    }
  }

  launchLIA(lia: Lia) {
    this.liaService.launchLia(this.userId, lia).then(() => {
      let link = ['LiaSubmissionPage', { userId: this.userId, liaId: lia.id }];
      this.router.navigate(link);
    });
  }
}
