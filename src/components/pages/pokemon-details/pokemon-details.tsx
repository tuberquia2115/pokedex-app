import { Suspense } from "react";
import { useParams } from "react-router-dom";

import { GET_POKEMON_BY_ID } from "@/graphql";
import { PokemonDetailsData } from "@/interfaces";
import { useSuspenseQuery } from "@apollo/client";
import "./pokemon-details.css";

const Pokemon = ({ pokemonId }: { pokemonId: number }) => {
  const { data } = useSuspenseQuery<PokemonDetailsData>(GET_POKEMON_BY_ID, {
    variables: { id: pokemonId },
  });

  return (
    <div>
      <p>stats</p>
      {data.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonstats.map((stat) => {
        return (
          <div>
            <p>stat: {stat.pokemon_v2_stat.name}</p>
            <p>base stat: {stat.base_stat}</p>
          </div>
        );
      })}
    </div>
  );
};

export const PokemonDetails = () => {
  const { pokemonId } = useParams();

  return (
    <Suspense
      fallback={
        <div style={{ backgroundColor: "greenyellow" }}>Loading pokemon...</div>
      }
    >
      <Pokemon pokemonId={Number(pokemonId!)} />
    </Suspense>
  );
};
