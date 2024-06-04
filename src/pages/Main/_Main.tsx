import React, { FC } from 'react';
import {IMainProps} from "./_Main.props";
import {Todos} from "../../components";

import styles from './_Main.module.scss';

export const Main: FC<IMainProps> = ({...props}) => (
    <div className={styles.main} {...props}>
        <Todos/>
    </div>
);