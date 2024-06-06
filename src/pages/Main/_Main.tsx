import React, { FC } from "react";

import { Todos } from "../../components";
import styles from "./_Main.module.scss";

export const Main: FC = () => (
  <div className={styles.main}>
    <Todos />
  </div>
);
