import React from "react";

import { Card } from "@/components/atoms/card";
import { PokemonItem } from "@/components/molecules";
import { PokemonV2Pokemon } from "@/interfaces";
import styles from "./pokedex-list.module.css";

interface PokedexListProps {
  pokemons: PokemonV2Pokemon[];
}

export const PokedexList: React.FC<PokedexListProps> = ({ pokemons }) => {
  return (
    <Card classNameContainer={styles.container_card}>
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </Card>
  );
};
