import React from "react";
import { Card, Image } from "@/components/atoms";
import styles from "./pokemon-item.module.css";
import { PokemonV2Pokemon } from "@/interfaces";

interface PokemonItemProps {
  pokemon: PokemonV2Pokemon;
}

export const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  return (
    <Card classNameContainer={styles.container_card}>
      <span className={styles.id}>#{pokemon.id.toString()}</span>
      <Image
        containerClassName={styles.image}
        height={82}
        width={80}
        src={
          pokemon.pokemon_v2_pokemonsprites[0].sprites["official-artwork"]
            .front_default
        }
      />
      <p className={styles.pokemon_name}>{pokemon.name}</p>
      <div className={styles.card_footer} />
    </Card>
  );
};
