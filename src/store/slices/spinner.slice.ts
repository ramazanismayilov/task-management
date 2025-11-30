import { createSlice } from "@reduxjs/toolkit";

interface SpinnerState {
    activeRequests: number;
}

const initialState: SpinnerState = {
    activeRequests: 0,
}

const spinnerSlice = createSlice({
    name: "spinner",
    initialState,
    reducers: {
        startSpinner: (state) => {
            state.activeRequests += 1;
        },
        stopSpinner: (state) => {
            state.activeRequests = Math.max(0, state.activeRequests - 1);
        },
    },
});

export const { startSpinner, stopSpinner } = spinnerSlice.actions;
export default spinnerSlice.reducer;
