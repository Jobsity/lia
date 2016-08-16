import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { LiveInterviewAppComponent } from '../app/live-interview.component';

beforeEachProviders(() => [LiveInterviewAppComponent]);

describe('App: LiveInterview', () => {
  it('should create the app',
      inject([LiveInterviewAppComponent], (app: LiveInterviewAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'live-interview-application works!\'',
      inject([LiveInterviewAppComponent], (app: LiveInterviewAppComponent) => {
    expect(app.title).toEqual('Welcome!');
  }));
});
