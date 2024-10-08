import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  containerClassName,
  ...props
}) => (
  <div className={containerClassName}>
    <input {...props} />
  </div>
);
