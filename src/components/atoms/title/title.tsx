import styles from "./title.module.css";

export const Title = () => (
  <div className={styles.container}>
    <img src="assets/icons/poke-ball.png" alt="poke-ball" />
    <p className={styles.title}>Pokédex</p>
  </div>
);
