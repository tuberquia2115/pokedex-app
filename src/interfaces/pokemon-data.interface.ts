export interface PokemonData {
  pokemon_v2_pokemon: PokemonV2Pokemon[];
}

export interface PokemonV2Pokemon {
  name: string;
  id: number;
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
}

export interface PokemonV2Pokemonsprite {
  sprites: Sprites;
}

export interface Sprites {
  home: Home;
  showdown: Showdown;
  dream_world: DreamWorld;
  "official-artwork": OfficialArtwork;
}

export interface DreamWorld {
  front_female: null;
  front_default: null | string;
}

export interface Home {
  front_shiny: string;
  front_female: null | string;
  front_default: string;
  front_shiny_female: null | string;
}

export interface OfficialArtwork {
  front_shiny: string;
  front_default: string;
}

export interface Showdown {
  back_shiny: string;
  back_female: null | string;
  front_shiny: string;
  back_default: string;
  front_female: null | string;
  front_default: string;
  back_shiny_female: null;
  front_shiny_female: null | string;
}
