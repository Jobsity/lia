import {beforeEach, beforeEachProviders, expect, it, inject} from "@angular/core/testing";
import {ComponentFixture, TestComponentBuilder} from "@angular/compiler/testing";
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";
import {HomePageComponent} from "./home-page.component";

import { RouteRegistry } from '@angular/router-deprecated/src/route_registry';
import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import { ROUTER_PRIMARY_COMPONENT, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import { RootRouter } from '@angular/router-deprecated/src/router';


@Component({
  selector: 'root-comp',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
export class RootCmp {
  name: string;
  activatedCmp: any;
}


describe('Component: HomePage', () => {
  let builder: TestComponentBuilder;
  let location;

  beforeEachProviders(() => [
    HomePageComponent,
    RouteRegistry,
    {provide: Location, useClass: SpyLocation},
    {provide: ROUTER_PRIMARY_COMPONENT, useValue: RootCmp},
    {provide: Router, useClass: RootRouter}
  ]);

  beforeEach(inject([TestComponentBuilder, Location], function (tcb: TestComponentBuilder, l: Location) {
    builder = tcb;
    location = l;
  }));

  it('should inject the component', inject([HomePageComponent],
      (component: HomePageComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {return builder.createAsync(TestApp)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(HomePageComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));

  it('should have a title image to be defined', inject([], () => {return builder.createAsync(TestApp)
    .then((fixture: ComponentFixture<any>) => {
      let imgElement = fixture.debugElement.query(By.css('img[card-img]'));
      expect(imgElement).toBeDefined();
    });
  }));

  it('should have a title to be defined', inject([], () => {return builder.createAsync(TestApp)
    .then((fixture: ComponentFixture<any>) => {
      let titleElement = fixture.debugElement.query(By.css('card-title'));
      expect(titleElement).toBeDefined();
    });
  }));

  it('should have a subtitle to be defined', inject([], () => {return builder.createAsync(TestApp)
    .then((fixture: ComponentFixture<any>) => {
      let subtitleElement = fixture.debugElement.query(By.css('card-subtitle'));
      expect(subtitleElement).toBeDefined();
    });
  }));

  it('should have text content to be defined', inject([], () => {return builder.createAsync(TestApp)
    .then((fixture: ComponentFixture<any>) => {
      let contentElement = fixture.debugElement.query(By.css('card-content'));
      expect(contentElement.nativeElement.textContent).toBeDefined();
    });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-home-page></app-home-page>
  `,
  directives: [HomePageComponent]
})
class TestApp { }
