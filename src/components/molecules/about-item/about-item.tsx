import React from "react";

import styles from "./about-item.module.css";

interface AboutItemProps {
  icon?: JSX.Element;
  label: string;
  contentValue: string;
  classNameContainer?: string;
}
export const AboutItem: React.FC<AboutItemProps> = ({
  icon,
  label,
  contentValue,
  classNameContainer,
}) => (
  <div className={`${styles.container} ${classNameContainer}`}>
    <div className={styles.container_icon__and_value}>
      {icon && icon}
      <p className={styles.content_value}>{contentValue}</p>
    </div>
    <p className={styles.pokemon_label}>{label}</p>
  </div>
);
