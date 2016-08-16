import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILia, Lia } from '../lia';
import { LiaDescriptionComponent } from './../lia-description/lia-description.component';
import { LiaCodeSubmissionComponent } from '../lia-code-submission/lia-code-submission.component';
import { LiaToastComponent } from '../../../components/lia-toast/lia-toast.component';
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
    LiaHeaderComponent,
    LiaToastComponent
  ]
})

export class LiaSubmissionPageComponent implements OnInit {
  lia: ILia;
  leaveMsg: string;
  saveProgressIntervalId: number;
  timeWarningIntervalId: number;
  timeWarningDisplayed: boolean;
  toastMsg: string;
  timeWarning: number;

  constructor(
    private liaService: LiaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let userId = +this.route.snapshot.params['userId'];
    let liaId = +this.route.snapshot.params['liaId'];

    this.liaService.getUserLia(userId, liaId).then(res => {
      this.lia = res;
      let remainingSeconds = Lia.getRemainingSeconds(this.lia);

      if (this.lia.state === 'submitted' || this.lia.state === 'opened') {
        this.router.navigate(['/users/', userId, 'lia', res.id]);
      }

      // Start interval that saves progress.
      if (this.lia.state === 'in_progress') {
        this.startSaveProgressInterval();
      }

      // Check if time is up.
      if (remainingSeconds <= 0) {
        this.doAutoSubmit(this.lia);
        return;
      }

      // Start timer that checks remaining time.
      if (remainingSeconds > this.timeWarning) {
        this.startTimerInterval();
      }
    });
  }

  doAutoSubmit(lia: ILia) {
    // @TODO: change to a modal dialog
    alert('Your time has ended. Your progress will be saved now.');
    lia.snippet_code = '';
    lia.submitted_code = btoa(lia.submitted_code);
    this.submitLia(lia);
  }

  handleChangeToastMsg($event: any) {
    this.toastMsg = $event.value;
  }

  startSaveProgressInterval() {
    this.saveProgressIntervalId = setInterval(() => {
      let userId = +this.route.snapshot.params['userId'];
      let lia = Lia.copy(this.lia);

      if (lia.state === 'submitted') {
        clearTimeout(this.saveProgressIntervalId);
        return;
      }

      if (lia.submitted_code) {
        lia.snippet_code = btoa(lia.submitted_code);
        lia.submitted_code = '';
      }

      this.liaService.saveProgress(userId, lia);
    }, 10000);
  }

  startTimerInterval() {
    this.timeWarningIntervalId = setInterval(() => {
      let remainingSeconds = Lia.getRemainingSeconds(this.lia);

      if (!this.timeWarningDisplayed && remainingSeconds <= this.timeWarning) {
        this.toastMsg = 'You only have ' + this.timeWarning + ' seconds left to complete the challenge!';
        this.timeWarningDisplayed = true;
      } else if (remainingSeconds <= 0) {
        this.doAutoSubmit(this.lia);
        clearTimeout(this.timeWarningIntervalId);
      }
    }, 1000);
  }

  submitLia(lia: ILia): void {
    let userId = +this.route.snapshot.params['userId'];
    this.liaService.submitLia(userId, lia).then(() => {
      this.router.navigate(['/users/', userId, 'lia', lia.id]);
    });
  }
}
