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
import { LiaLandingPageComponent } from './lia-landing-page.component';

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

describe('Component: LiaCard', () => {
  let builder: TestComponentBuilder;
  let liaService: LiaService;

  beforeEachProviders(() => [
    LiaLandingPageComponent,
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

  beforeEach(inject([TestComponentBuilder, LiaService], function (tcb: TestComponentBuilder, liaSrv: LiaService) {
    builder = tcb;
    liaService = liaSrv;
  }));

  it('should inject the component', inject([LiaLandingPageComponent],
      (component: LiaLandingPageComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create lia-landing-page component', inject([], () => { return builder.createAsync(TestApp)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LiaLandingPageComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-lia-landing-page></app-lia-landing-page>
  `,
  directives: [LiaLandingPageComponent]
})
class TestApp { }
