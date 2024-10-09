import { usePokemonDetails } from "@/hooks";
import { PokeBallIcon } from "@/components/atoms/icons";
import { Card, Image, Spinner } from "@/components/atoms";
import { AboutPokemon, BaseStats } from "@/components/organisms";
import { HeaderPokemonDetails, PokemonTypes } from "@/components/molecules";

import styles from "./template-pokemon-details.module.css";

export const TemplatePokemonDetails = () => {
  const { pokemon, error, loading } = usePokemonDetails();

  if (loading || !pokemon) return <Spinner />;

  if (error) return <p>Error!</p>;

  return (
    <div
      className={styles.container_root}
      style={{ backgroundColor: pokemon.pokemonColors.lightVibrant }}
    >
      <PokeBallIcon className={styles.poke_ball} />
      <div className={styles.container_layout_main}>
        <HeaderPokemonDetails />

        <Image
          src={pokemon.picture}
          alt={pokemon.name}
          className={styles.pokemon_image}
        />
        <Card classNameContainer={styles.card_details}>
          <PokemonTypes />
          <AboutPokemon />
          <p className={styles.flavor_text}>{pokemon.flavorText}</p>
          <BaseStats />
        </Card>
      </div>
    </div>
  );
};
