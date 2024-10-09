import { useEffect } from "react";

import { useAppSelector } from "@/store";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "@/graphql";
import { PokemonData, PokemonV2Pokemon } from "@/interfaces";

export const usePokemons = (limit: number = 100) => {
  const { sortTypeSelected, pokemonSearchInputValue } = useAppSelector(
    (state) => state.filters
  );
  const { favorites } = useAppSelector((state) => state.pokemons);
  const favoritePokemons = Object.values(favorites);
  const isFilterFavorites = sortTypeSelected === "favorites";
  const isPokemonSearchInputNumeric = !isNaN(Number(pokemonSearchInputValue));
  const queryVariables = { variables: { limit, order_by: { name: "asc" } } };

  const { data, error, loading, refetch } = useQuery<PokemonData>(
    GET_POKEMONS,
    queryVariables
  );

  const filterPokemonsById = (pokemons: PokemonV2Pokemon[]) => {
    const pokemonById = pokemons.find(
      (pokemon) => pokemon.id === Number(pokemonSearchInputValue)
    );

    return pokemonById ? [pokemonById] : [];
  };

  const filterPokemonsByName = (pokemons: PokemonV2Pokemon[]) => {
    return pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonSearchInputValue.toLowerCase())
    );
  };

  const filterPokemons = (pokemons: PokemonV2Pokemon[]) => {
    if (pokemonSearchInputValue.length === 0) return pokemons;

    if (isPokemonSearchInputNumeric && sortTypeSelected === "id") {
      return filterPokemonsById(pokemons);
    }
    if (
      !isPokemonSearchInputNumeric &&
      ["name", "favorites"].includes(sortTypeSelected)
    ) {
      return filterPokemonsByName(pokemons);
    }

    return pokemons;
  };

  const filteredPokemons = filterPokemons(
    isFilterFavorites ? favoritePokemons : data?.pokemon_v2_pokemon ?? []
  );

  useEffect(() => {
    if (!isFilterFavorites) {
      refetch({ order_by: { [sortTypeSelected]: "asc" } });
    }
  }, [isFilterFavorites, refetch, sortTypeSelected]);

  return {
    pokemons: filteredPokemons,
    error,
    loading,
  };
};
