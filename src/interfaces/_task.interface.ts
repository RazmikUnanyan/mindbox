import {Dispatch, SetStateAction} from "react";

export type State<T> =  [T, Dispatch<SetStateAction<T>>]
export type Status = "Active" | "Completed" | "All"
export interface ITask  {id: number, label: string, status: Status}

export interface IFilters {id: number, name: Status}
