import React from "react";
import { useNavigate } from "react-router-dom";

import { getImagePokemon } from "@/utils";
import { PokemonV2Pokemon } from "@/interfaces";
import { Card, Image } from "@/components/atoms";
import { toggleFavorite, useAppSelector, useAppDispatch } from "@/store";
import { FavoriteBorderIcon, FavoriteIcon } from "@/components/atoms/icons";

import styles from "./pokemon-item.module.css";

interface PokemonItemProps {
  pokemon: PokemonV2Pokemon;
}

export const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.pokemons);
  const pokemonImg = getImagePokemon(pokemon.id);
  const isPokemonFavorite = !!favorites[pokemon.id];

  const onGoToDetails = () => {
    navigate(`/pokemon-details/${pokemon.id}`);
  };

  const onToggle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    dispatch(toggleFavorite(pokemon));
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
        <div onClick={onToggle} className={styles.container_favorite}>
          {isPokemonFavorite ? (
            <FavoriteIcon className={styles.favorite_icon} />
          ) : (
            <FavoriteBorderIcon className={styles.favorite_icon} />
          )}
        </div>
      </div>
    </Card>
  );
};
