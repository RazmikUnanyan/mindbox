import React, { FC, memo } from "react";

import { FILTERS } from "../../../constants";
import { Status } from "../../../interfaces";
import { Button } from "../../../ui";
import styles from "./_TodosFooter.module.scss";

export interface ITodosFooterProps {
  tasksCount?: number;
  currentFilter: string;
  onSetCurrentFilter: (filter: Status) => void;
  onClear: () => void;
}

export const TodosFooter: FC<ITodosFooterProps> = memo(
  ({ onClear, onSetCurrentFilter, currentFilter, tasksCount = 0 }) => (
    <footer className={styles.footer}>
      <div className={styles.counter}>{`${tasksCount} items left`}</div>
      <div className={styles.filters}>
        {FILTERS.map((filter) => (
          <Button
            key={filter.name}
            onClick={() => onSetCurrentFilter(filter.name)}
            variant={filter.name === currentFilter ? "secondary" : "primary"}>
            {filter.name}
          </Button>
        ))}
      </div>
      <div className={styles.clear}>
        <Button data-testid="clear" onClick={onClear}>
          Clear completed
        </Button>
      </div>
    </footer>
  )
);
