import { badge } from '../js/components/badge';
import { mockOriginalSinglePokemonData, mockSinglePokemonData } from './mockData';

describe('badge', () => {
  describe('render', () => {
    it('should return correct badges for given pokemon types', () => {
      const result = badge.render(mockSinglePokemonData);
      const expectedOutput = '<div class="poke-badge poke-badge--grass">Grass</div><div class="poke-badge poke-badge--poison">Poison</div>';
      
      expect(result).toBe(expectedOutput);
    });

    it('should return empty badge if no types are provided', () => {
      const result = badge.render(mockOriginalSinglePokemonData);
      const expectedOutput = '<div class="poke-badge poke-badge--empty"></div>';

      expect(result).toBe(expectedOutput);
    });
  });
});
