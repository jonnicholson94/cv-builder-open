
import { createSlice } from "@reduxjs/toolkit";

import { Active } from "../types/sidebar";

const initialState = {
    active: "Your details"
}

const activeSlice = createSlice({
    name: 'active',
    initialState,
    reducers: {
        changeActive(state, action: { payload: Active }) {
            state.active = action.payload
        }
    }
})

export default activeSlice.reducer 

export const { changeActive } = activeSlice.actions