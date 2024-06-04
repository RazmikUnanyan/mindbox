
export type Status = "Active" | "Completed" | "All"
export interface ITask  {id: number, label: string, status: Status}

export interface IFilters {id: number, name: Status}