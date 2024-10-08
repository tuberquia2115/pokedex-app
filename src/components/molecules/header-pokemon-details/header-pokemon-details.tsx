import { useNavigate } from "react-router-dom";

import { ArrowBackIcon } from "@/components/atoms/icons";
import { useAppSelector } from "@/store";

import styles from "./header-pokemon-details.module.css";

export const HeaderPokemonDetails = () => {
  const { pokemonDetails } = useAppSelector((state) => state.pokemons);
  const navigate = useNavigate();

  const onGoToBack = () => navigate("/");

  return (
    <div className={styles.container}>
      <div className={styles.container_btn_back} onClick={() => onGoToBack()}>
        <ArrowBackIcon />
        <p className={styles.pokemon_name}>{pokemonDetails?.name}</p>
      </div>
      <span className={styles.pokemon_id}>
        #{pokemonDetails?.id?.toString()}
      </span>
    </div>
  );
};
