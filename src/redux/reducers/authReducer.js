import { createSlice } from "@reduxjs/toolkit";
import { pipGetRegisterStep, pipSetRegisterStep } from "../../utils/pip";
// import {
//     adminLogin,
// } from "../actions/authActions";

const initialState = {
  isLoading: false,
  isToggle: false,
  currentStep: pipGetRegisterStep() ?? 1,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    toggleChange: (state, action) => {
      state.isToggle = action?.payload;
    },
    handleCurrentStep: (state, action) => {
      pipSetRegisterStep(action?.payload);
      state.currentStep = action?.payload;
    },
  },
});

export const { toggleChange, handleCurrentStep } = authSlice.actions;
export default authSlice.reducer;
