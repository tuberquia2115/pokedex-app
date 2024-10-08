import React from "react";

import styles from "./progress-bar.module.css";

interface ProgressBarProps {
  value: number;
  maxValue: number;
  bgColorSlider?: string;
  bgColorRange?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  maxValue,
  bgColorRange = "var(--primary-color)",
  bgColorSlider = "var(--primary-color)",
}) => {
  const percentage = (value / maxValue) * 100;
  return (
    <div
      className={styles.slider_thumb}
      style={{ backgroundColor: `${bgColorSlider}33` }}
    >
      <div
        className={styles.range}
        style={{ width: `${percentage}%`, backgroundColor: bgColorRange }}
      />
    </div>
  );
};
