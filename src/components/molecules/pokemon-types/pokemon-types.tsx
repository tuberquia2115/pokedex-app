import { Chips } from "@/components/atoms";
import { useAppSelector } from "@/store";

import styles from "./pokemon-types.module.css";

export const PokemonTypes = () => {
  const { pokemonDetails } = useAppSelector((state) => state.pokemons);

  const types = pokemonDetails?.types;
  const colors = Object.values(pokemonDetails?.pokemonColors ?? {});

  return (
    <div className={styles.container_types}>
      {types?.map(({ pokemon_v2_type }, indexPokemon) => (
        <Chips
          key={pokemon_v2_type.id}
          bgColor={colors[indexPokemon] ?? "var(--primary-color)"}
          label={pokemon_v2_type.name}
        />
      ))}
    </div>
  );
};
