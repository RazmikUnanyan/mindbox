import React, { FC } from "react";

import styles from "./_Input.module.scss";
import { IInputProps } from "./_Input.props";

export const Input: FC<IInputProps> = ({ checkboxLabel, type, ...props }) => {
  switch (type) {
    case "checkbox":
      return (
        <label className={styles.checkboxLabel}>
          <input type={type} className={styles.checkboxInput} {...props} />
          {checkboxLabel}
        </label>
      );
    default:
      return <input type={type} className={styles.input} {...props} />;
  }
};
