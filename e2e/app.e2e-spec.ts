import { Angular2CliDemoPage } from './app.po';

describe('angular2-cli-demo App', () => {
  let page: Angular2CliDemoPage;

  beforeEach(() => {
    page = new Angular2CliDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
