import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LiaSubmissionPageComponent } from './lia-submission-page.component';

import { LiaService } from './../lia.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { AuthService } from './../../auth/auth.service';
import { RouteRegistry } from '@angular/router-deprecated/src/route_registry';
import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import { ROUTER_PRIMARY_COMPONENT, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import { RootRouter } from '@angular/router-deprecated/src/router';
import { RouteParams } from '@angular/router-deprecated';

import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';

@Component({
  selector: 'root-comp',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
export class RootCmp {
  name: string;
  activatedCmp: any;
}

describe('Component: LiaSubmissionPage', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    LiaSubmissionPageComponent,
    LiaService,
    AuthService,
    HTTP_PROVIDERS,
    RouteRegistry,
    {provide: Location, useClass: SpyLocation},
    {provide: ROUTER_PRIMARY_COMPONENT, useValue: RootCmp},
    {provide: Router, useClass: RootRouter},
    provide(RouteParams, { useValue: new RouteParams({ id: '1' }) }),

    BaseRequestOptions,
    MockBackend,
    provide(Http, {useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
    }, deps: [MockBackend, BaseRequestOptions]})
  ]);
  
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([LiaSubmissionPageComponent],
      (component: LiaSubmissionPageComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => { return builder.createAsync(TestApp)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaSubmissionPageComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <lia-submission-page></lia-submission-page>
  `,
  directives: [LiaSubmissionPageComponent]
})
class TestApp {
}
