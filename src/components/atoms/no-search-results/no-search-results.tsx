import { useAppSelector } from "@/store";

import styles from "./no-search-results.module.css";

export const NoSearchResults = () => {
  const { pokemonSearchInputValue, sortTypeSelected } = useAppSelector(
    (state) => state.filters
  );

  return (
    <div className={styles.container}>
      <p className={styles.description}>
        No se encontraron resultados para "
        <strong>{pokemonSearchInputValue}</strong>". Intenta con otro{" "}
        <strong>{sortTypeSelected}</strong>.
      </p>
    </div>
  );
};
