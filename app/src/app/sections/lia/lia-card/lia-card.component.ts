import { Component, OnInit } from '@angular/core';
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

  constructor(private liaService: LiaService) {}

  ngOnInit() {
    this.lia = {
      id: 1,
      title: 'Test LIA 1',
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis expedita facilis fugit illo molestiae optio quae quo vero. Animi, officia, vitae. Alias debitis dolores expedita fugiat incidunt numquam quas, ullam.',
      language: 'JavaScript',
      state: 'opened',
      time: 60,
      user_id: 1,
      username: 'test1',
      created_at: '2016-05-23'
    };
    this.liaService.getUserLia({id: 1}, {id: 123}).then(res => console.log(res));
  }

  launchLIA(lia: Lia) {
    this.liaService.launchLia({id: 1}, {id: 123}).then(res => console.log(res));
  }

}
