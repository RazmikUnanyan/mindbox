import React, {ChangeEvent, FC} from 'react';
import {Input} from "../../ui";
import {Plug} from "../Plug";
import {PLUGS} from "../../constants";
import {ITask, Status} from "../../interfaces";

import styles from './_List.module.scss';

export interface IListProps  {
    tasks: ITask[] | null;
    filter: Status;
    onHandleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const List: FC<IListProps> = ({onHandleChange, filter, tasks, ...props}) => {

    const filterTasks = tasks?.filter((tasks) => filter === "All" || tasks.status === filter);
    const showPlug = !filterTasks?.length;

    return (
        <div className={styles.list} {...props}>
            {showPlug && <Plug title={PLUGS[filter]}/>}
            {filterTasks?.map((task) => (
                <div key={task.id} className={styles.checkboxContainer}>
                    <Input onChange={onHandleChange}
                           name={task?.label}
                           type="checkbox"
                           checkboxLabel={task?.label}
                           checked={task?.status === "Completed"}
                    />
                </div>
            ))}
        </div>
    )
};