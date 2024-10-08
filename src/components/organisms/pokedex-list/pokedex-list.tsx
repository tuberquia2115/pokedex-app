import React from "react";

import { Card } from "@/components/atoms/card";
import { PokemonV2Pokemon } from "@/interfaces";
import { NoSearchResults } from "@/components/atoms";
import { PokemonItem } from "@/components/molecules";

import styles from "./pokedex-list.module.css";

interface PokedexListProps {
  pokemons: PokemonV2Pokemon[];
}

export const PokedexList: React.FC<PokedexListProps> = ({ pokemons }) => {
  const isEmptyPokemons = pokemons.length === 0;

  if (isEmptyPokemons)
    return (
      <Card>
        <NoSearchResults />
      </Card>
    );

  return (
    <Card classNameContainer={styles.container_card}>
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </Card>
  );
};
