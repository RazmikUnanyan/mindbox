import React, { FC } from "react";

import { useTasksData, useTasksHandlers } from "../../hooks";
import { List } from "../List";
import { TodosFooter } from "./TodosFooter";
import { TodosHeader } from "./TodosHeader";
import styles from "./_Todos.module.scss";

export const Todos: FC = () => {
  const { tasksState, todoCreationInputValueState, filterState, activeTasksCount } = useTasksData();

  const { handleSetLabel, handleAddTaskClick, handleClearClick, handleChange } = useTasksHandlers(
    tasksState,
    todoCreationInputValueState,
    filterState
  );

  const [tasks] = tasksState;
  const [todoCreationInputValue] = todoCreationInputValueState;
  const [currentFilter, setCurrentFilter] = filterState;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>todos</h1>
      <TodosHeader value={todoCreationInputValue} onSetLabel={handleSetLabel} onAddTaskClick={handleAddTaskClick} />
      <List tasks={tasks} filter={currentFilter} onHandleChange={handleChange} />
      <TodosFooter
        tasksCount={activeTasksCount}
        currentFilter={currentFilter}
        onSetCurrentFilter={setCurrentFilter}
        onClear={handleClearClick}
      />
    </div>
  );
};
