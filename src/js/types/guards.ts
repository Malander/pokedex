import { PokemonBase, PokemonData } from './types';

export const isPokemonData = (obj: PokemonData | PokemonBase): obj is PokemonData => {
  return 'types' in obj;
};