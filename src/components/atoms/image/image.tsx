/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Image: React.FC<ImageProps> = ({ ...props }) => {
  return <img {...props} />;
};
