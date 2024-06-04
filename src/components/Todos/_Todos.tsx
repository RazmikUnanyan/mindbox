import React, {FC, useCallback, useState, KeyboardEvent, ChangeEvent} from 'react';
import {List} from "../List";
import {ITask, Status} from "../../interfaces";
import {TodosFooter} from "./TodosFooter";
import {ITodosProps} from "./_Todos.props";
import {TodosHeader} from "./TodosHeader";

import styles from "./_Todos.module.scss";

export const Todos: FC<ITodosProps> = ({...props}) => {
    const [tasks, setTasks] = useState<ITask[] | []>([])
    const [label, setLabel] = useState("");
    const [currentFilter, setCurrentFilter] = useState<Status>("All");
    const activeTasksCount = tasks?.filter((task) => task.status === "Active").length

    const handleSetLabel = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setLabel(event.target.value);
    }, [])

    const handleAddTaskClick = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const newTask: ITask = {id: Math.random(), label: label, status: "Active"};
            setTasks((state) => [...state, newTask]);
            setLabel("");
        }
    }, [label]);

    const handleClearClick = useCallback(() => {
        setTasks((state) => state.map(((task) => ({
            ...task,
            status: "Active"
        }))))
    }, [])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;
        const updateTasks:ITask[] = tasks.map((task) => {
            if (task.label === name) return {...task, status: task.status === "Active" ? "Completed" : "Active"}
            return task
        })
        setTasks(updateTasks)
    };

    return (
        <div className={styles.container} {...props}>
            <h1 className={styles.title}>todos</h1>
            <TodosHeader value={label}
                         onSetLabel={handleSetLabel}
                         onAddTaskClick={handleAddTaskClick}
            />
            <List tasks={tasks} filter={currentFilter} onHandleChange={handleChange}/>
            <TodosFooter tasksCount={activeTasksCount}
                         currentFilter={currentFilter}
                         onSetCurrentFilter={setCurrentFilter}
                         onClear={handleClearClick}
            />
        </div>
    );
};
