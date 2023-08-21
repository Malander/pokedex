import { PokemonData } from '../assets/js/types/types';

export const mockOriginalSinglePokemonData: PokemonData = {
  name: 'Ivysaur',
  url: 'https://pokeapi.co/api/v2/pokemon/2/',
  id: null,
  idString: null,
  image: null,
  stats: null,
  order: null,
  types: null,
};

export const mockSinglePokemonData: PokemonData = {
  'name': 'Bulbasaur',
  'url': 'https://pokeapi.co/api/v2/pokemon/1/',
  'id': 1,
  'idString': '#0001',
  'image': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  'stats': [
    {
      'base_stat': 45,
      'effort': 0,
      'stat': {
        'name': 'hp',
        'url': 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      'base_stat': 49,
      'effort': 0,
      'stat': {
        'name': 'attack',
        'url': 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      'base_stat': 49,
      'effort': 0,
      'stat': {
        'name': 'defense',
        'url': 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      'base_stat': 65,
      'effort': 1,
      'stat': {
        'name': 'special-attack',
        'url': 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      'base_stat': 65,
      'effort': 0,
      'stat': {
        'name': 'special-defense',
        'url': 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      'base_stat': 45,
      'effort': 0,
      'stat': {
        'name': 'speed',
        'url': 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
  'order': 1,
  'types': [
    {
      'slot': 1,
      'type': {
        'name': 'grass',
        'url': 'https://pokeapi.co/api/v2/type/12/',
      },
    },
    {
      'slot': 2,
      'type': {
        'name': 'poison',
        'url': 'https://pokeapi.co/api/v2/type/4/',
      },
    },
  ],
};

