import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface IPlugProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string
}