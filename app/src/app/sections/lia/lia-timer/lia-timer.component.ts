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

  @Input()
  time: number;

  constructor() {}

  ngOnInit() {
    var seconds = this.time * 60;
    let timer = Observable.timer(0, 1000)
      .takeUntil(Observable.timer( seconds * 1000 ));
    timer.subscribe(t => {
      this.timeInMinutes =  moment.duration(seconds - t, 'seconds').minutes();
      this.timeInSeconds = moment.duration(seconds - t, 'seconds').seconds();
    });
  }

}
