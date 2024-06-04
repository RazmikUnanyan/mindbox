import React, {FC} from 'react';
import {ITodosHeaderProps} from "./_TodosHeader.props";
import {Input} from "../../../ui";

import styles from "./_TodosHeader.module.scss";

export const TodosHeader: FC<ITodosHeaderProps> = ({value, onSetLabel, onAddTaskClick, ...props}) => (
    <header className={styles.header} {...props}>
        <Input placeholder="Waht needs to be done?"
               value={value}
               onChange={onSetLabel}
               onKeyDown={onAddTaskClick}
        />
    </header>
);
