import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { CanDeactivate, ComponentInstruction } from '@angular/router-deprecated';

import { Lia } from '../lia';
import { LiaDescriptionComponent } from './../lia-description/lia-description.component';
import { LiaCodeSubmissionComponent } from '../lia-code-submission/lia-code-submission.component';
import { LiaService } from './../lia.service';
import { LiaHeaderComponent } from './../lia-header';

@Component({
  moduleId: module.id,
  selector: 'lia-submission-page',
  templateUrl: 'lia-submission-page.component.html',
  styleUrls: ['lia-submission-page.component.css'],
  directives: [
    LiaDescriptionComponent,
    LiaCodeSubmissionComponent,
    LiaHeaderComponent
  ]
})

export class LiaSubmissionPageComponent implements OnInit, CanDeactivate {

  lia: Lia;
  leaveMsg: string;

  constructor(
    private liaService: LiaService,
    private router: Router,
    private routeParams: RouteParams
  ) {
    this.leaveMsg = 'You haven\'t submitted your code yet.\nAre you sure you want to leave?';
  }

  ngOnInit() {
    let userId = +this.routeParams.get('userId');
    let liaId = +this.routeParams.get('liaId');

    // This is used to alert user before leaving the page.
    window.onbeforeunload = () => this.leaveMsg;

    this.liaService.getUserLia(userId, liaId).then(res => {
      this.lia = res;

      if (this.lia.state === 'submitted' || this.lia.state === 'opened') {
        let link = ['LiaLandingPage', { userId: userId, liaId: res.id }];
        this.router.navigate(link);
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (this.lia.state === 'in_progress') {
      return confirm(this.leaveMsg);
    }

    return true;
  }

  submitLia(lia: Lia): void {
    let userId = +this.routeParams.get('userId');
    this.liaService.submitLia(userId, lia).then(() => {
      let link = ['LiaLandingPage', { userId: userId, liaId: lia.id }];
      this.router.navigate(link);
    });
  }

}
