import {
  beforeEachProviders,
  it,
  describe,
  expect,
  fakeAsync,
  inject,
  tick
} from '@angular/core/testing';
import { provide } from '@angular/core';
import { LiaService } from './lia.service';
import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';

xdescribe('Lia Service', () => {
  beforeEachProviders(() => [
    LiaService,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
    }, deps: [MockBackend, BaseRequestOptions]})
  ]);

  it('should ...', inject([LiaService, MockBackend], fakeAsync((service, mockBackend: MockBackend) => {
    var res;
    mockBackend.connections.subscribe(c => {
      console.log('url', c.request.url);
      let response = new ResponseOptions({body: '{test: true}'});
      c.mockRespond(new Response(response));
    });

    service.getUserLia(1, 1).then(r => res = r);
    tick();
    }))
  );


});
