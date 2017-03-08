import { Music2AppPage } from './app.po';

describe('music2-app App', () => {
  let page: Music2AppPage;

  beforeEach(() => {
    page = new Music2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
