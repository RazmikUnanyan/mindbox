import React, { FC } from "react";
import cn from "classnames";

import { IButtonProps } from "./_Button.props";

import styles from "./_Button.module.scss";

export const Button: FC<IButtonProps> = ({ variant="primary", children, ...props }) => (
    <button
        className={cn(styles.button, {
            [styles.primary]: variant === "primary",
            [styles.secondary]: variant === "secondary",
        })}
        {...props}>
        {children}
    </button>
);