import { errorMessage } from '../../../js/components/error';

describe('errorMessage', () => {
  // Create a container before each test
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
  });

  describe('template', () => {
    it('should return the correct HTML template', () => {
      const template = errorMessage.template();
      expect(template).toContain('<div class="poke-error">');
      expect(template).toContain('<img width="200" height="200" src="/images/sad-pikachu.png" alt="Sad Pikachu">');
      expect(template).toContain('<h2>There was an error with your request.</h2>');
      expect(template).toContain('<p>Please try again in a few minutes.</p>');
    });
  });

  describe('render', () => {
    it('should render the template into the #app element', () => {
      errorMessage.render();
      const appContent = document.getElementById('app')!.innerHTML;

      expect(appContent).toEqual(errorMessage.template());
    });
  });
});