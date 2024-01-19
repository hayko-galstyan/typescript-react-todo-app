export interface ToDoState {
    tasks:TaskInterface[],
    taskWithDate:string[]
}

export interface TaskInterface  {
    id:number;
    title:string;
    date:string;
    completed:boolean;
}

export interface ChangeCompletedParameter {
    index:number
}

export interface EditTaskNameParameter {
    index:number,
    text:string
}
