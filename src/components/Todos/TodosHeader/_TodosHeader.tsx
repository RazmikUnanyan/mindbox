import React, { ChangeEvent, FC, KeyboardEvent, memo } from "react";

import { Input } from "../../../ui";
import styles from "./_TodosHeader.module.scss";

export interface ITodosHeaderProps {
  value: string;
  onSetLabel: (event: ChangeEvent<HTMLInputElement>) => void;
  onAddTaskClick: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export const TodosHeader: FC<ITodosHeaderProps> = memo(({ value, onSetLabel, onAddTaskClick }) => (
  <header className={styles.header}>
    <Input
      data-testid="input-task"
      placeholder="What needs to be done?"
      value={value}
      onChange={onSetLabel}
      onKeyDown={onAddTaskClick}
    />
  </header>
));
