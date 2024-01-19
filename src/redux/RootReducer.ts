import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./Home";


export const store = configureStore({
    reducer:{
        todo:HomeSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
