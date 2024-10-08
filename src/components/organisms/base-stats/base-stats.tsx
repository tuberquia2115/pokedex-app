import { ProgressBar, Title } from "@/components/atoms";
import { useAppSelector } from "@/store";

import styles from "./base-stats.module.css";

export const BaseStats = () => {
  const { pokemonDetails } = useAppSelector((state) => state.pokemons);
  const colorVibrant = pokemonDetails?.pokemonColors.vibrant;

  return (
    <div className={styles.container}>
      <Title classNameContainer={styles.title} style={{ color: colorVibrant }}>
        Base Stats
      </Title>
      <div className={styles.container_stats}>
        <div className={styles.container_names}>
          {pokemonDetails?.stats?.map((stat) => (
            <strong
              key={`${stat.name}-"${stat.stat_id}`}
              style={{ color: colorVibrant }}
            >
              {stat.name}
            </strong>
          ))}
        </div>

        <div className={styles.container_values}>
          {pokemonDetails?.stats?.map((stat) => {
            return (
              <div
                key={`${stat.name}-"${stat.stat_id}`}
                className={styles.container_base_stat}
              >
                <strong>
                  {stat.base_stat > 100 ? stat.base_stat : `0${stat.base_stat}`}
                </strong>
                <ProgressBar
                  bgColorSlider={colorVibrant}
                  bgColorRange={colorVibrant}
                  value={stat.base_stat}
                  maxValue={255}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
