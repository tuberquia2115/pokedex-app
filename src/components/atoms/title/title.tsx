import { PropsWithChildren } from "react";

import styles from "./title.module.css";

interface TitleProps extends PropsWithChildren {
  classNameContainer?: string;
  style?: React.CSSProperties;
}

export const Title: React.FC<TitleProps> = ({
  children,
  classNameContainer,
  style,
}) => (
  <p className={`${styles.title} ${classNameContainer}`} style={style}>
    {children}
  </p>
);
