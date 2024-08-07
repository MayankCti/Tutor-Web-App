import { createSlice } from "@reduxjs/toolkit";
// import {
//     adminLogin,
// } from "../actions/authActions";

const initialState = {
    isLoading: false,
    isToggle: false,
};

export const authSlice = createSlice({
    name: "Auth",
    initialState: initialState,
    reducers: {
        toggleChange: (state, action) => {
            state.isToggle = action?.payload;
        }
    }
});

export const { toggleChange } = authSlice.actions;
export default authSlice.reducer;