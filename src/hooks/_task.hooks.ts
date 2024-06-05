import {ChangeEvent, KeyboardEvent, useCallback, useState} from "react";
import {ITask, ITasksData, ITasksHandlers, State, Status} from "../interfaces";

/**
 * useTasksData управляет состояниями приложения, связанными с задачами.
 * Включает массив с задачами, значение ввода для создания новой задачи, фильтр задач и счетчик активных задач.
 *
 * @returns {ITasksData} Объект с состояниями.
 * @returns {State<ITask[] | []>} return.tasksState Список всех задач.
 * @returns {State<string>} return.todoCreationInputValueState Текущее значение ввода для создания новой задачи.
 * @returns {State<Status>} return.filterState Текущий фильтр задач.
 * @returns {number} return.activeTasksCount Количество активных задач.
 */

export const useTasksData = (): ITasksData => {
    const tasksState = useState<ITask[] | []>([])
    const todoCreationInputValueState = useState("");
    const filterState = useState<Status>("All");
    const [tasks,] = tasksState
    const activeTasksCount = tasks?.filter((task) => task.status === "Active").length;

    return {tasksState, todoCreationInputValueState, filterState, activeTasksCount}
}


/**
 * useTasksHandlers - Хук для управления состоянием и добавлением новых задач.
 *
 * @param {State<ITask[] | []>} tasksState - Управление списком задач.
 * @param {State<string>} todoCreationInputValueState - Управление значением ввода для создания новой задачи.
 * @param {State<Status>} filterState - Управление фильтром для задач.
 *
 * @returns {ITasksHandlers} Объект с обработчиками.
 * @returns {Function} returns.handleSetLabel - Функция для установки названия для задачи.
 * @returns {Function} returns.handleAddTaskClick - Функция для добавления задачи.
 * @returns {Function} returns.handleClearClick - Функция для обработки клика по кнопке очистки завершенных задач.
 * @returns {Function} returns.handleChange - Функция управления значением ввода для создания новой задачи.
 */

export const useTasksHandlers = (
    tasksState: State<ITask[] | []>,
    todoCreationInputValueState: State<string>,
    filterState: State<Status>
): ITasksHandlers => {

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
        setTasks((state) => state.filter(((task) =>  task.status === "Active")))
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
