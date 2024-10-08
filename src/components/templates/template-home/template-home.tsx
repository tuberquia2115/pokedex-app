import { Spinner } from "@/components/atoms";
import { Filters, PokedexList } from "@/components/organisms";
import { Logo } from "@/components/molecules";
import { usePokemons } from "@/hooks";

import styles from "./template-home.module.css";

export const TemplateHome = () => {
  const { loading, error, pokemons } = usePokemons();

  if (loading) return <Spinner />;

  if (error) return <p>Error!</p>;

  return (
    <div className={styles.container_template_home}>
      <Logo />
      <Filters />
      <PokedexList pokemons={pokemons} />
    </div>
  );
};
