import { useEffect, useMemo } from "react";
import { usePalette } from "react-palette";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_BY_ID } from "@/graphql";
import { PokemonDetailsData } from "@/interfaces";
import { getStatName, getImagePokemon } from "@/utils";
import { setPokemonDetails, useAppDispatch } from "@/store";

export const usePokemonDetails = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const pokemonId = params.pokemonId;

  const pokemonImg = getImagePokemon(Number(pokemonId));
  const { data: colorsImg } = usePalette(pokemonImg);

  const queryVariables = { variables: { id: pokemonId } };

  const { data, loading, error } = useQuery<PokemonDetailsData>(
    GET_POKEMON_BY_ID,
    queryVariables
  );

  const pokemon = useMemo(() => {
    if (!data) return null;
    return {
      picture:
        data.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonsprites[0].sprites[
          "official-artwork"
        ].front_default,
      pokemonColors: colorsImg,
      id: data?.pokemon_v2_pokemon_by_pk?.id,
      name: data?.pokemon_v2_pokemon_by_pk?.name,
      height: data?.pokemon_v2_pokemon_by_pk?.height,
      weight: data?.pokemon_v2_pokemon_by_pk?.weight,
      generationName: data?.pokemon_v2_generation_by_pk?.name,
      stats: data?.pokemon_v2_pokemon_by_pk?.pokemon_v2_pokemonstats.map(
        (stat) => ({
          name: getStatName(stat.pokemon_v2_stat.name),
          base_stat: stat.base_stat,
          stat_id: stat.stat_id,
        })
      ),
      moves: data?.pokemon_v2_pokemon_by_pk?.pokemon_v2_pokemonmoves.map(
        (move) => move.pokemon_v2_move.name
      ),
      types: data?.pokemon_v2_pokemon_by_pk?.pokemon_v2_pokemontypes,
      flavorText: data?.pokemon_v2_pokemonspeciesflavortext_by_pk?.flavor_text,
    };
  }, [colorsImg, data]);

  const onSetPokemonDetails = () => {
    if (pokemon) {
      dispatch(setPokemonDetails(pokemon));
    }
  };

  useEffect(onSetPokemonDetails, [dispatch, pokemon]);

  return { pokemon, loading: loading, error };
};
