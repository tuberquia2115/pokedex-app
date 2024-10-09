import { PaletteColors } from "react-palette";

export interface PokemonDetailsData {
  pokemon_v2_pokemon_by_pk: PokemonV2PokemonByPk;
  pokemon_v2_generation_by_pk: PokemonV2GenerationByPkClass;
  pokemon_v2_pokemonspeciesflavortext_by_pk: PokemonV2PokemonspeciesflavortextByPk;
}

interface PokemonV2GenerationByPkClass {
  name: string;
}

interface PokemonV2PokemonByPk {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokemon_v2_pokemontypes: PokemonV2Pokemontype[];
  pokemon_v2_pokemonmoves: PokemonV2Pokemonmove[];
  pokemon_v2_pokemonstats: PokemonV2Pokemonstat[];
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
}

interface PokemonV2Pokemonmove {
  pokemon_v2_move: PokemonV2MoveClass;
}

interface PokemonV2MoveClass {
  name: string;
  id: number;
}

interface PokemonV2Pokemonsprite {
  sprites: Sprites;
}

interface Sprites {
  home: Home;
  showdown: Showdown;
  dream_world: DreamWorld;
  "official-artwork": OfficialArtwork;
}

interface DreamWorld {
  front_female: null;
  front_default: string;
}

interface Home {
  front_shiny: string;
  front_female: null;
  front_default: string;
  front_shiny_female: null;
}

interface OfficialArtwork {
  front_shiny: string;
  front_default: string;
}

interface Showdown {
  back_shiny: string;
  back_female: null;
  front_shiny: string;
  back_default: string;
  front_female: null;
  front_default: string;
  back_shiny_female: null;
  front_shiny_female: null;
}

interface PokemonV2Pokemonstat {
  pokemon_v2_stat: PokemonV2GenerationByPkClass;
  base_stat: number;
  stat_id: number;
}

interface PokemonV2Pokemontype {
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
