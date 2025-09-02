import type { ReactNode } from "react";

import cls from "./Button.module.scss";

export const Button = ({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={[cls.Button, className || ""].join("")} {...props}>
      {children}
    </button>
  );
};
