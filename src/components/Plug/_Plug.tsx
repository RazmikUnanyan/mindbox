import React, {FC} from 'react';

import styles from './_Plug.module.scss';

export interface IPlugProps {
    title: string
}
export const Plug: FC<IPlugProps> = ({title}) => (
    <div className={styles.plug}>
        {title}
    </div>
);