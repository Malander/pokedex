import { Loader } from '../../assets/js/components/Loader';

describe('Loader component', () => {
  describe('render', () => {
    it('should return the correct loader HTML template', () => {
      const renderedTemplate = Loader.render();

      expect(renderedTemplate).toContain('<div class="poke-loader">');
      expect(renderedTemplate).toContain('<div class="poke-loader__icon"></div>');
      expect(renderedTemplate).toContain('<p class="poke-loader__text">Loading Pokedex...</p>');
      expect(renderedTemplate).toContain('</div>');
    });
  });
});