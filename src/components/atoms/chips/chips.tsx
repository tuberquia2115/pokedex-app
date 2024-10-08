import React from "react";

import styles from "./chips.module.css";

interface ChipsProps {
  label: string;
  bgColor: string;
}

export const Chips: React.FC<ChipsProps> = ({ label, bgColor }) => (
  <div className={styles.container_chips} style={{ backgroundColor: bgColor }}>
    <strong className={styles.label_chip}>{label}</strong>
  </div>
);
