import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { LiveInterviewApplicationAppComponent } from '../app/live-interview-application.component';

beforeEachProviders(() => [LiveInterviewApplicationAppComponent]);

describe('App: LiveInterviewApplication', () => {
  it('should create the app',
      inject([LiveInterviewApplicationAppComponent], (app: LiveInterviewApplicationAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'live-interview-application works!\'',
      inject([LiveInterviewApplicationAppComponent], (app: LiveInterviewApplicationAppComponent) => {
    expect(app.title).toEqual('live-interview-application works!');
  }));
});
