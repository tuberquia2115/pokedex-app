import { PaletteColors } from "react-palette";

export interface PokemonDetailsData {
  pokemon_v2_pokemon_by_pk: PokemonV2PokemonByPk;
  pokemon_v2_generation_by_pk: PokemonV2GenerationByPkClass;
  pokemon_v2_pokemonspeciesflavortext_by_pk: PokemonV2PokemonspeciesflavortextByPk;
}

export interface PokemonV2GenerationByPkClass {
  name: string;
}

export interface PokemonV2PokemonByPk {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokemon_v2_pokemontypes: PokemonV2Pokemontype[];
  pokemon_v2_pokemonmoves: PokemonV2Pokemonmove[];
  pokemon_v2_pokemonstats: PokemonV2Pokemonstat[];
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
}

export interface PokemonV2Pokemonmove {
  pokemon_v2_move: PokemonV2MoveClass;
}

export interface PokemonV2MoveClass {
  name: string;
  id: number;
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
  front_default: string;
}

export interface Home {
  front_shiny: string;
  front_female: null;
  front_default: string;
  front_shiny_female: null;
}

export interface OfficialArtwork {
  front_shiny: string;
  front_default: string;
}

export interface Showdown {
  back_shiny: string;
  back_female: null;
  front_shiny: string;
  back_default: string;
  front_female: null;
  front_default: string;
  back_shiny_female: null;
  front_shiny_female: null;
}

export interface PokemonV2Pokemonstat {
  pokemon_v2_stat: PokemonV2GenerationByPkClass;
  base_stat: number;
  stat_id: number;
}

export interface PokemonV2Pokemontype {
  pokemon_v2_type: PokemonV2MoveClass;
}

export interface PokemonV2PokemonspeciesflavortextByPk {
  flavor_text: string;
}

interface Stat {
  name: string;
  base_stat: number;
  stat_id: number;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  picture: string;
  pokemonColors: PaletteColors;
  moves: string[];
  stats: Stat[] | undefined;
  types: PokemonV2Pokemontype[];
  flavorText: string;
  generationName: string;
}
