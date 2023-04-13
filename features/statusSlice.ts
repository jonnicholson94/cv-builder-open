
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toastMessage: "",
    toastStatus: "",
    toastShowing: false,
    saving: false
}

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        showToast: (state, action) => {
            state.toastMessage = action.payload.message 
            state.toastStatus = action.payload.status 
            state.toastShowing = true 
        },
        hideToast: (state) => {
            state.toastMessage = ""
            state.toastStatus = ""
            state.toastShowing = false 
        },
        showSaving: (state) => {
            state.saving = true
        },
        removeSaving: (state) => {
            state.saving = false
        }
    }
})

export default statusSlice.reducer 

export const { showToast, hideToast, showSaving, removeSaving } = statusSlice.actions