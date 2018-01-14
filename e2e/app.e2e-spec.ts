import { NeararoundPage } from './app.po';

describe('neararound App', function() {
  let page: NeararoundPage;

  beforeEach(() => {
    page = new NeararoundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
