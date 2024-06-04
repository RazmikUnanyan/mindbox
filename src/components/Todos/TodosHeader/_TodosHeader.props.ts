import {ChangeEvent, DetailedHTMLProps, HTMLAttributes, KeyboardEvent} from "react";

export interface ITodosHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    value: string;
    onSetLabel: (event: ChangeEvent<HTMLInputElement>) => void;
    onAddTaskClick: (event: KeyboardEvent<HTMLInputElement>) => void;
}