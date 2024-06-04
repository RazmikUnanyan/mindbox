import React, {FC, memo} from 'react';
import {ITodosFooterProps} from "./_TodosFooter.props";

import styles from "./_TodosFooter.module.scss";
import {Button, Input} from "../../../ui";
import {FILTERS} from "../../../constants";

export const TodosFooter: FC<ITodosFooterProps> = memo(({onClear, onSetCurrentFilter, currentFilter, tasksCount = 0, ...props}) => (
    <footer className={styles.footer} {...props}>
        <div className={styles.counter}>{`${tasksCount} items left`}</div>
        <div className={styles.filters}>
            {FILTERS.map((filter) => (
                <Button onClick={() => onSetCurrentFilter(filter.name)}
                        variant={filter.name === currentFilter ? "secondary" : "primary"}>
                    {filter.name}
                </Button>
            ))}
        </div>
        <div className={styles.clear}><Button onClick={onClear}>Clear completed</Button></div>
    </footer>
));
