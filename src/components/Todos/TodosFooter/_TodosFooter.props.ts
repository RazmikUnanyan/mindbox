import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ITodosHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    value: string;
    onSetLabel: any;
    onAddTaskClick: any;
}