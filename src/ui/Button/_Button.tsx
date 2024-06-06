import React, { FC } from "react";

import cn from "classnames";

import styles from "./_Button.module.scss";
import { IButtonProps } from "./_Button.props";

export const Button: FC<IButtonProps> = ({ variant = "primary", children, ...props }) => (
  <button
    className={cn(styles.button, {
      [styles.primary]: variant === "primary",
      [styles.secondary]: variant === "secondary",
    })}
    {...props}>
    {children}
  </button>
);
