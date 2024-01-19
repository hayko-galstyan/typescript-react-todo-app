import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { ToDoState, TaskInterface, ChangeCompletedParameter , EditTaskNameParameter } from "../../interfaces/Home";
import { RootState } from "../RootReducer";

const initialState:ToDoState  = {
    tasks:[],
    taskWithDate:[]
}

const HomeSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTasks:(state,action:PayloadAction<TaskInterface>) => {
            const newTask = action.payload;
            let data = [...state.tasks]
            let arr = [...state.taskWithDate];
            if(data) {
                for (const task of data) {
                    if (!arr.includes(task.date)) {
                    arr.push(task.date);
                    }
                }
            }
            return {
                ...state,
                tasks:[...state.tasks,newTask],
                taskWithDate:arr
            }
        },
        changeTaskCompleted:(state,action:PayloadAction<ChangeCompletedParameter>)=>{
            const {index} =  action.payload;
            state.tasks[index].completed = !state.tasks[index].completed
        },
        editTaskName:(state,action:PayloadAction<EditTaskNameParameter>)=>{
            const {index,text} = action.payload;
            state.tasks[index].title = text;
        },
        deleteTaskItem:(state,action:PayloadAction<ChangeCompletedParameter>) => {
            const {index}= action.payload;
            state.tasks.splice(index, 1);
        }
    }
})

export const getTasks = (state:RootState) => state.todo.taskWithDate;
export const getAllTasks = (state:RootState)=>state.todo.tasks;
export const {addTasks,changeTaskCompleted,editTaskName,deleteTaskItem} = HomeSlice.actions

export default HomeSlice.reducer;