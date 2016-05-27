import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { Lia } from '../lia';
import { LiaDescriptionComponent } from './../lia-description/lia-description.component';
import { LiaCodeSubmittionComponent } from './../lia-code-submittion/lia-code-submittion.component';
import { LiaService } from './../lia.service';


@Component({
  moduleId: module.id,
  selector: 'app-lia-page',
  templateUrl: 'lia-page.component.html',
  styleUrls: ['lia-page.component.css'],
  directives: [LiaDescriptionComponent, LiaCodeSubmittionComponent],
})
export class LiaPageComponent implements OnInit {

  lia: Lia;

  constructor(private liaService: LiaService,
              private router: Router,
              private routeParams: RouteParams) { }

  ngOnInit() {
    let userId = +this.routeParams.get('userId');
    let liaId = +this.routeParams.get('liaId');
    this.liaService.getUserLia(userId, liaId).then(res => this.lia = res);
  }

  submitLia(lia: Lia): void {
    console.log('submitting LIA...', lia);
  }

}