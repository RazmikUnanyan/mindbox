import {ChangeEvent, DetailedHTMLProps, HTMLAttributes} from "react";
import {ITask, Status} from "../../interfaces";

export interface IListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tasks: ITask[] | null;
    filter: Status;
    onHandleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}