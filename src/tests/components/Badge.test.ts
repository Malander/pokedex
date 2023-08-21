import { Badge } from '../../assets/js/components/Badge';
import { mockOriginalSinglePokemonData, mockSinglePokemonData } from '../mockData';

describe('Badge component', () => {
  describe('render', () => {
    it('should return correct badges for given pokemon types', () => {
      const result = Badge.render(mockSinglePokemonData.types);
      const expectedOutput = '<div class="poke-badge poke-badge--grass">Grass</div><div class="poke-badge poke-badge--poison">Poison</div>';
      
      expect(result).toBe(expectedOutput);
    });

    it('should return empty badge if no types are provided', () => {
      const result = Badge.render(mockOriginalSinglePokemonData.types);
      const expectedOutput = '<div class="poke-badge poke-badge--empty"></div>';

      expect(result).toBe(expectedOutput);
    });
  });
});
