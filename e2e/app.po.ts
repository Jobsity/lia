export class LiveInterviewApplicationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('live-interview-application-app h1')).getText();
  }
}
