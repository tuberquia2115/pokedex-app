import React, { ImgHTMLAttributes, useState } from "react";

import { assetStorage } from "@/utils";

import styles from "./image.module.css";
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackImage?: string;
}

export const Image: React.FC<ImageProps> = ({
  fallbackImage = assetStorage.default.fallbackImagePokemon,
  src,
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(fallbackImage);

  const handleImageLoad = () => {
    setIsLoaded(true);
    setImageSrc(src ?? "");
  };

  const handleError = () => setImageSrc(fallbackImage);

  return (
    <img
      className={`${styles.image} ${className}`}
      src={imageSrc}
      onLoad={handleImageLoad}
      onError={handleError}
      style={{ opacity: isLoaded ? 1 : 0.2 }}
      {...props}
    />
  );
};
