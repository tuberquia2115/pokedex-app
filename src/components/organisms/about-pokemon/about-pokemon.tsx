import { Title } from "@/components/atoms";
import { MeasuringRulerIcon, WeightIcon } from "@/components/atoms/icons";
import { AboutItem } from "@/components/molecules";
import { useAppSelector } from "@/store";
import styles from "./about-pokemon.module.css";

export const AboutPokemon = () => {
  const { pokemonDetails } = useAppSelector((state) => state.pokemons);

  const weight = (1000 / (pokemonDetails?.weight ?? 0))?.toFixed(1);
  const height = (100 / (pokemonDetails?.height ?? 0))?.toFixed(1);
  const moves = pokemonDetails?.moves?.join(" | ");
  const colorVibrant = pokemonDetails?.pokemonColors.vibrant;

  return (
    <div>
      <Title classNameContainer={styles.title} style={{ color: colorVibrant }}>
        About
      </Title>
      <div className={styles.container_about_items}>
        <AboutItem
          icon={
            <WeightIcon
              height={20}
              width={20}
              fill="var(--color-gray-scale-dark)"
            />
          }
          label="Weight"
          contentValue={`${weight} kg`}
        />
        <AboutItem
          classNameContainer={styles.container_items_height}
          icon={
            <MeasuringRulerIcon
              height={20}
              width={20}
              transform={"rotate(-90)"}
              fill="var(--color-gray-scale-dark)"
            />
          }
          label="Height"
          contentValue={`${height} m`}
        />
        <AboutItem label="Moves" contentValue={moves ?? ""} />
      </div>
    </div>
  );
};
