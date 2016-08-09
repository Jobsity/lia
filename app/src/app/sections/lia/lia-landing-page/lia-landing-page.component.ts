import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ILia } from '../lia';
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
    LIA_BUTTON_DIRECTIVES,
    LIA_CARD_DIRECTIVES,
    LiaInfoBlockComponent
  ]
})
export class LiaLandingPageComponent implements OnInit {

  lia: ILia;
  title: string;
  userId: number;
  liaId: number;

  constructor(
    private liaService: LiaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = +this.route.snapshot.params['userId'];
    this.liaId = +this.route.snapshot.params['liaId'];
    this.liaService.getUserLia(this.userId, this.liaId).then(res => {
      this.lia = res;
      this.setCardTitle(this.lia);
    });
  }

  isLiaJustSubmitted():boolean {
    return moment(new Date()).diff(moment(this.lia.submitted_at), 'minutes') <= 15;
  }

  private setCardTitle(lia: ILia) {
    if (lia.state === 'in_progress') {
      this.title = 'Continue your work';
    } else if (lia.state === 'submitted') {
      this.title = 'Thank you';
    } else {
      this.title = 'Welcome to Jobsity Live Coding';
    }
  }

  launchLIA(lia: ILia) {
    this.liaService.launchLia(this.userId, lia).then(() => {
      this.router.navigate(['/users/', this.userId, 'lia', lia.id, 'launch']);
    });
  }
}
