import React, {FC} from 'react';
import {IPlugProps} from "./_Plug.props";

import styles from './_Plug.module.scss';

export const Plug: FC<IPlugProps> = ({title, ...props}) => (
    <div className={styles.plug} {...props}>
        {title}
    </div>
);