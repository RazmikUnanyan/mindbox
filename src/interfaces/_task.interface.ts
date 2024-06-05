import {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction} from "react";

export type State<T> =  [T, Dispatch<SetStateAction<T>>]
export type Status = "Active" | "Completed" | "All"
export interface ITask  {id: number, label: string, status: Status}

export interface IFilters {id: number, name: Status}

export interface ITasksHandlers {
    handleSetLabel: (event: ChangeEvent<HTMLInputElement>) => void
    handleAddTaskClick: (event: KeyboardEvent<HTMLInputElement>) => void
    handleClearClick: () => void
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface ITasksData {
    tasksState: State<ITask[] | []>;
    todoCreationInputValueState: State<string>;
    filterState: State<Status>;
    activeTasksCount: number;
}
