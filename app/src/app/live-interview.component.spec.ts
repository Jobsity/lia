import { addProviders, inject } from '@angular/core/testing';
import { LiveInterviewAppComponent } from '../app/live-interview.component';

describe('App: LiveInterview', () => {
  beforeEach(() => {
    addProviders([LiveInterviewAppComponent]);
  });

  it('should create the app',
      inject([LiveInterviewAppComponent], (app: LiveInterviewAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'live-interview-application works!\'',
      inject([LiveInterviewAppComponent], (app: LiveInterviewAppComponent) => {
    expect(app.title).toEqual('live-interview-application works!');
  }));
});
