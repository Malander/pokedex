import { formatNumberToHash, generateSinglePokemonStateSlice, ucFirst } from '../../assets/js/utils/utils';

describe('ucFirst', () => {
  it('should capitalize the first letter of a string', () => {
    expect(ucFirst('poison')).toBe('Poison');
    expect(ucFirst('charmander')).toBe('Charmander');
    expect(ucFirst('bulbasaur')).toBe('Bulbasaur');
  });
});

describe('formatNumberToHash', () => {
  it('should format a number with leading zeros and prefix with a #', () => {
    expect(formatNumberToHash(203)).toBe('#0203');
    expect(formatNumberToHash(9)).toBe('#0009');
    expect(formatNumberToHash(13)).toBe('#0013');
  });

  it('should return the number as is if it has 4 or more digits', () => {
    expect(formatNumberToHash(2000)).toBe('#2000');
    expect(formatNumberToHash(99999)).toBe('#99999');
  });
});

describe('generateSinglePokemonStateSlice', () => {
  it('should transform a list of Pokémon to an object with extended properties', () => {
    // Sample input
    const pokemons = [
      { name: 'pikachu', url: 'http://pokemonurl/1' },
      { name: 'bulbasaur', url: 'http://pokemonurl/2' }
    ];

    // Expected output
    const expected = [
      {
        name: 'Pikachu',
        url: 'http://pokemonurl/1',
        id: null,
        idString: null,
        image: null,
        stats: null,
        order: null,
        types: null,
      },
      {
        name: 'Bulbasaur',
        url: 'http://pokemonurl/2',
        id: null,
        idString: null,
        image: null,
        stats: null,
        order: null,
        types: null,
      }
    ];

    // Act
    const result = generateSinglePokemonStateSlice(pokemons);

    // Assert
    expect(result).toEqual(expected);
  });
});