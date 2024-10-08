import { Title } from "@/components/atoms";

import { PokeBallIcon } from "@/components/atoms/icons";
import styles from "./logo.module.css";

export const Logo = () => (
  <div className={styles.container}>
    <PokeBallIcon />
    <Title classNameContainer={styles.label}>Pokédex</Title>
  </div>
);
