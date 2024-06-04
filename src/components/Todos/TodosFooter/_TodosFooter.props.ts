import {DetailedHTMLProps, HTMLAttributes} from "react";
import {Status} from "../../../interfaces";

export interface ITodosFooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    tasksCount?: number;
    currentFilter: string;
    onSetCurrentFilter: (filter: Status) => void;
    onClear: () => void
}