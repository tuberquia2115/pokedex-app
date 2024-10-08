import React, { ButtonHTMLAttributes } from "react";

import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | JSX.Element;
}
export const Button: React.FC<ButtonProps> = ({ className, ...props }) => (
  <button className={`${styles.button} ${className}`} {...props}>
    {props.label}
  </button>
);
