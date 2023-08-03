import { Alert } from './components/alert';
import { PokemonListAPIResponse } from './types';

export const fetchPokemonData = async() => {
  const limit = 10;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, { cache: "force-cache" });

    if (response.ok) {
      const data = await response.json() as PokemonListAPIResponse;
      return data.results;
    }

    throw new Error;

  } catch(error) {
    console.error(error)
    // document.getElementById('alert-slot')!.innerHTML = Alert({text: 'Si è verificato un errore, si prega di riprovare.', style: 'negative'})
  }
}