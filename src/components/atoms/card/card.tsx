import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./card.module.css";

interface CardProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  classNameContainer?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  classNameContainer,
  ...props
}) => (
  <div {...props} className={`${styles.card} ${classNameContainer}`}>
    {children}
  </div>
);
