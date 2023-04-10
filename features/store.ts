
import { configureStore } from "@reduxjs/toolkit";

import activeSlice from "./activeSlice";

export const store = configureStore({
    reducer: {
        active: activeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch