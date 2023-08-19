import { loader } from '../../../js/components/loader';

describe('loader', () => {
  describe('render', () => {
    it('should return the correct loader HTML template', () => {
      const renderedTemplate = loader.render();

      expect(renderedTemplate).toContain('<div class="poke-loader">');
      expect(renderedTemplate).toContain('<div class="poke-loader__icon"></div>');
      expect(renderedTemplate).toContain('<p class="poke-loader__text">Loading Pokedex...</p>');
      expect(renderedTemplate).toContain('</div>');
    });
  });
});