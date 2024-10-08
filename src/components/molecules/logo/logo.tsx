import { Image, Title } from "@/components/atoms";

import styles from "./logo.module.css";

export const Logo = () => (
  <div className={styles.container}>
    <Image src="assets/icons/poke-ball.png" alt="poke-ball" />
    <Title classNameContainer={styles.label}>Pokédex</Title>
  </div>
);
