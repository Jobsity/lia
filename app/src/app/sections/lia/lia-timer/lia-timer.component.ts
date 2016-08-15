import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ILia, Lia } from './../lia';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-lia-timer',
  templateUrl: 'lia-timer.component.html',
  styleUrls: ['lia-timer.component.css']
})
export class LiaTimerComponent implements OnInit {
  timeInMinutes: number;
  timeInSeconds: number;

  @Input() lia: ILia;

  constructor() {}

  ngOnInit() {
    let remainingSeconds = Lia.getRemainingSeconds(this.lia);
    let timer = Observable.timer(0, 1000)
      .takeUntil(Observable.timer(remainingSeconds * 1000));
    timer.subscribe(t => {
      remainingSeconds--;
      this.timeInMinutes = moment.duration(remainingSeconds, 'seconds').minutes();
      this.timeInSeconds = moment.duration(remainingSeconds, 'seconds').seconds();
    });
  }
}
