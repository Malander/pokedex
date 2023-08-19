export interface PokemonBase {
  name: string
  url: string
}
export interface PokemonListAPIResponse {
  count: number
  next: string
  previous: string
  results: PokemonBase[]
}
export interface AppState {
  pokemons: PokemonData[]
  isLoading: boolean
}
export interface PokemonData extends PokemonBase {
  id: number | null
  idString: string | null
  image: string | null
  stats: SinglePokemonAPIResponse['stats'] | null
  order: number | null
  types: SinglePokemonAPIResponse['types'] | null
}
export interface SinglePokemonAPIResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: [];
  forms: [];
  game_indices: [];
  held_items: [];
  location_area_encounters: string;
  moves: [];
  sprites: IPokemonSprites;
  species: Record<string, string>;
  stats: IPokemonStat[];
  types: IPokemonType[];
}
export interface IPokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: IPokemonSpriteOther;
  versions: unknown;
}
export interface IPokemonSpriteOther {
  dream_world: 'front_default' | 'front_female';
  'official-artwork': {
    front_default: string;
  };
}
export interface IPokemonStat {
  stat: {
    name: string;
    url: string;
  };
  effort: number;
  base_stat: number;
}
export interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}