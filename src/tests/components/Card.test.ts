import { getPokemonData } from '../../assets/js/api/api';
import { Card } from '../../assets/js/components/Card';
import { store } from '../../assets/js/store/store';
import { formatNumberToHash, ucFirst } from '../../assets/js/utils/utils';
import { mockSinglePokemonData, mockSinglePokemonDataApiResponse } from '../mockData';

jest.mock('../../assets/js/api/api');
jest.mock('../../assets/js/store/store');

describe('Card Component', () => {
  let mockElement: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '<div data-fetch-url="https://pokeapi.co/api/v2/pokemon/1/" class="poke-card"></div>';
    mockElement = document.querySelector('.poke-card')!;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should load Pokemon card data and update the store', async () => {
    const mockedStore = store.update as jest.MockedFunction<typeof store.update>;
    (getPokemonData as jest.MockedFunction<typeof getPokemonData>).mockResolvedValue(mockSinglePokemonDataApiResponse);
    await Card.loadPokemonCard(mockElement);
    expect(mockedStore).toHaveBeenCalled();
  });

  it('should transform API response to PokemonData format', () => {
    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/1/';
    const result = Card.transformResponseToPokemonData(mockSinglePokemonDataApiResponse, pokemonUrl);
    expect(result).toEqual({
      name: ucFirst(mockSinglePokemonDataApiResponse.name),
      url: pokemonUrl,
      id: mockSinglePokemonDataApiResponse.id,
      idString: formatNumberToHash(mockSinglePokemonDataApiResponse.id),
      image: mockSinglePokemonDataApiResponse.sprites.other['official-artwork'].front_default,
      stats: mockSinglePokemonDataApiResponse.stats,
      order: mockSinglePokemonDataApiResponse.order,
      types: mockSinglePokemonDataApiResponse.types,
    });
  });

  it('should update Pokemon list with new data', () => {
    store.state.pokemons = [
      mockSinglePokemonData,
    ];
    const result = Card.getUpdatedPokemons('https://pokeapi.co/api/v2/pokemon/1/', mockSinglePokemonData);
    expect(result).toEqual([mockSinglePokemonData]);
  });

  it('should render Pokemon card', () => {
    const result = Card.render(mockSinglePokemonData);
    expect(result).toContain(mockSinglePokemonData.name);
  });

  it('should render error card', () => {
    Card.error(mockElement);
    const errorCard = document.querySelector('.poke-card--error');
    expect(errorCard).not.toBeNull();
  });
});