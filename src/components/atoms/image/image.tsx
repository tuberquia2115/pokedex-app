import React, { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export const Image: React.FC<ImageProps> = ({
  containerClassName,
  ...props
}) => {
  return (
    <div className={containerClassName}>
      <img {...props} />
    </div>
  );
};
