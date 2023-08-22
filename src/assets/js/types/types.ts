export interface PokemonBase {
  name: string
  url: string
}
export interface PokemonListAPIResponse {
  count: number
  next: string
  previous: string | null
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
  past_types: [];
  game_indices: [];
  held_items: [];
  location_area_encounters: string;
  moves: [];
  sprites: PokemonSprites;
  species: Record<string, string>;
  stats: PokemonStat[];
  types: PokemonType[];
}
export interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: PokemonSpriteOther;
  versions: unknown;
}
export interface PokemonSpriteOther {
  dream_world: {
    front_default: string | null;
    front_female: string | null;
  }
  'official-artwork': {
    front_default: string;
    front_shiny: string | null
  };
  home: unknown
}
export interface PokemonStat {
  stat: {
    name: string;
    url: string;
  };
  effort: number;
  base_stat: number;
}
export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}