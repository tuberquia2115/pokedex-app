import React, { ButtonHTMLAttributes } from "react";
import styles from "./sort-button.module.css";

interface SortButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
export const SortButton: React.FC<SortButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <button className={`${styles.button} ${className}`}>{props.label}</button>
  );
};
