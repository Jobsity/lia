import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
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

  @Input() remainingSeconds: number;

  constructor() {}

  ngOnInit() {
    let timer = Observable.timer(0, 1000)
      .takeUntil(Observable.timer( this.remainingSeconds * 1000 ));
    timer.subscribe(t => {
      this.timeInMinutes =  moment.duration(this.remainingSeconds, 'seconds').minutes();
      this.timeInSeconds = moment.duration(this.remainingSeconds, 'seconds').seconds();
    });
  }
}
