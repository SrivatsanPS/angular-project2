import { ProjecttwoPage } from './app.po';

describe('projecttwo App', () => {
  let page: ProjecttwoPage;

  beforeEach(() => {
    page = new ProjecttwoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
