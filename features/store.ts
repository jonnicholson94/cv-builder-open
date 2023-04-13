
import { configureStore } from "@reduxjs/toolkit";

import activeSlice from "./activeSlice";
import statusSlice from "./statusSlice";

export const store = configureStore({
    reducer: {
        active: activeSlice,
        status: statusSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch