import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, Image } from "@/components/atoms";
import { PokemonV2Pokemon } from "@/interfaces";
import { getImagePokemon } from "@/utils";

import styles from "./pokemon-item.module.css";

interface PokemonItemProps {
  pokemon: PokemonV2Pokemon;
}

export const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  const navigate = useNavigate();
  const pokemonImg = getImagePokemon(pokemon.id);

  const onGoToDetails = () => {
    navigate(`/pokemon-details/${pokemon.id}`);
  };

  return (
    <Card
      classNameContainer={styles.container_card}
      onClick={() => onGoToDetails()}
    >
      <span className={styles.pokemon_id}>#{pokemon.id.toString()}</span>
      <div className={styles.container_image}>
        <Image className={styles.image} src={pokemonImg} />
        <div className={styles.card_footer} />
        <p className={styles.pokemon_name}>{pokemon.name}</p>
      </div>
    </Card>
  );
};
