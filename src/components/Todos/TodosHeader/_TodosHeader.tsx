import React, {FC} from 'react';
import {ITodosHeaderProps } from "./_TodosHeader.props";

import styles from "./_TodosHeader.module.scss";
import {Input} from "../../../ui";

export const TodosHeader:FC<ITodosHeaderProps> = ({ value, onSetLabel, onAddTaskClick, ...props}) => (
    <header className={styles.header} {...props}>
        <Input placeholder="Waht needs to be done?"
               value={value}
               onChange={onSetLabel}
               onKeyPress={onAddTaskClick}
        />
    </header>
    );
