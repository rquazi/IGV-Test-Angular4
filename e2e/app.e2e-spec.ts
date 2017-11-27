import { IgvTestPage } from './app.po';

describe('igv-test App', () => {
  let page: IgvTestPage;

  beforeEach(() => {
    page = new IgvTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
