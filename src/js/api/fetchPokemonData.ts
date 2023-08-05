import { PokemonListAPIResponse } from '../types/types';

export const fetchPokemonData = async () => {
  const limit = 100;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);

    if (response.ok) {
      const data = await response.json() as PokemonListAPIResponse;
      return data.results;
    }

    throw new Error();
  } catch (error) {
    console.error(error);
  }
};
