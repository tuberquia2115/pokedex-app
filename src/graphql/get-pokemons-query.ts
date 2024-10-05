import { gql } from "@apollo/client";

export const GET_POKEMONS = gql(`
  query getPokemons($limit: Int!) {
    pokemon_v2_pokemon(order_by: { name: asc }, limit: $limit) {
      name
      id
      pokemon_v2_pokemonsprites {
        id
        sprites(path: "other")
      }
    }
  }
`);
