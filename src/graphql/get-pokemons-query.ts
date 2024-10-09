import { gql } from "@apollo/client";

export const GET_POKEMONS = gql(`
  query getPokemons($limit: Int!, $order_by: [pokemon_v2_pokemon_order_by!]) {
  pokemon_v2_pokemon(order_by: $order_by, limit: $limit) {
    name
    id,
    pokemon_v2_pokemonsprites {
      sprites(path: "other")
    }
  }
}
`);
