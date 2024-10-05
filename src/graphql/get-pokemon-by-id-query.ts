import { gql } from "@apollo/client";

export const GET_POKEMON_BY_ID = gql(`
  query getPokemonById($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
          id
        }
      }
      pokemon_v2_pokemonsprites {
        sprites(path: "other")
      }
      pokemon_v2_pokemonmoves(limit: 2) {
        pokemon_v2_move {
          name
          id
        }
      }
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
        }
        base_stat
        stat_id
      }
    }
    pokemon_v2_generation_by_pk(id: $id) {
      name
    }
    pokemon_v2_pokemonspeciesflavortext_by_pk(id: $id) {
      flavor_text
    }
  }
`);
