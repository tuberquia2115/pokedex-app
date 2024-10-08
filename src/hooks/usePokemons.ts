import { useEffect, useMemo } from "react";

import { GET_POKEMONS } from "@/graphql";
import { PokemonData, PokemonV2Pokemon } from "@/interfaces";
import { useAppSelector } from "@/store";
import { useQuery } from "@apollo/client";

export const usePokemons = (limit: number = 9) => {
  const { sortTypeSelected, pokemonSearchInputValue } = useAppSelector(
    (state) => state.filters
  );

  const isPokemonSearchInputNumeric = !isNaN(Number(pokemonSearchInputValue));
  const queryVariables = useMemo(
    () => ({
      limit,
      order_by: { [sortTypeSelected]: "asc" },
    }),
    [limit, sortTypeSelected]
  );

  const { data, error, loading, refetch } = useQuery<PokemonData>(
    GET_POKEMONS,
    { variables: queryVariables }
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
    if (isPokemonSearchInputNumeric && sortTypeSelected === "id")
      return filterPokemonsById(pokemons);
    if (!isPokemonSearchInputNumeric && sortTypeSelected === "name")
      return filterPokemonsByName(pokemons);

    return pokemons;
  };

  const filteredPokemons = filterPokemons(data?.pokemon_v2_pokemon ?? []);

  useEffect(() => {
    refetch(queryVariables);
  }, [sortTypeSelected, queryVariables, refetch]);

  return { pokemons: filteredPokemons, error, loading };
};
