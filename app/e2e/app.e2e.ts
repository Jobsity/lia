import { LiveInterviewApplicationPage } from './app.po';

describe('live-interview-application App', function() {
  let page: LiveInterviewApplicationPage;

  beforeEach(() => {
    page = new LiveInterviewApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('live-interview-application works!');
  });
});
