import {ChangeEvent, KeyboardEvent, useCallback, useState} from "react";
import {ITask, State, Status} from "../interfaces";

export const useTasksData = () => {
    const tasksState = useState<ITask[] | []>([])
    const todoCreationInputValueState = useState("");
    const filterState = useState<Status>("All");
    const [tasks,] = tasksState
    const activeTasksCount = tasks?.filter((task) => task.status === "Active").length;

    return {tasksState, todoCreationInputValueState, filterState, activeTasksCount}
}
export const useTasksHandlers = (
    tasksState: State<ITask[] | []>,
    todoCreationInputValueState: State<string>,
    filterState: State<Status>
) => {

    const [tasks, setTasks] = tasksState;
    const [todoCreationInputValue, setTodoCreationInputValue] = todoCreationInputValueState;
    const [, setCurrentFilter] = filterState;


    const handleSetLabel = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setTodoCreationInputValue(event.target.value);
    }, [])

    const handleAddTaskClick = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const newTask: ITask = {id: Math.random(), label: todoCreationInputValue, status: "Active"};
            setTasks((state) => [...state, newTask]);
            setCurrentFilter("All");
            setTodoCreationInputValue("");
        }
    }, [todoCreationInputValue]);

    const handleClearClick = useCallback(() => {
        setTasks((state) => state.map(((task) => ({
            ...task,
            status: "Active"
        }))))
    }, [])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name} = event.target;
        const updateTasks: ITask[] = tasks.map((task) => {
            if (task.label === name) return {...task, status: task.status === "Active" ? "Completed" : "Active"}
            return task
        })
        setTasks(updateTasks)
    };

    return {
        handleSetLabel,
        handleAddTaskClick,
        handleClearClick,
        handleChange,
    }
}
