import { createSlice } from "@reduxjs/toolkit";
import {
  pipGetRegisterStep,
  pipSaveTeacherProfile,
  pipSetRegisterStep,
} from "../../utils/pip";
import {
  fetchProfile,
  teacherForgotPassword,
  teacherlogin,
  teacherRegister,
  updateProfile,
} from "../actions/authAction";
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
  extraReducers: (builder) => {
    // auth-register
    builder.addCase(teacherRegister.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(teacherRegister.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(teacherRegister.rejected, (state, action) => {
      state.isLoading = false;
    });
    // auth-login
    builder.addCase(teacherlogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(teacherlogin.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(teacherlogin.rejected, (state, action) => {
      state.isLoading = false;
    });
    // auth-forgot-password
    builder.addCase(teacherForgotPassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(teacherForgotPassword.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(teacherForgotPassword.rejected, (state, action) => {
      state.isLoading = false;
    });
    // fetch-profile
    builder.addCase(fetchProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      const { data, success } = action?.payload ?? {};
      const { teacher, stream, theme } = success ? data : {};
      const { profile_image, full_name, email, username } = teacher;
      const { theme_color } = theme;
      const { stream_name } = stream;
      const profile = {
        profile_image,
        full_name,
        email,
        stream_name,
        theme_color,
        username
      };
      if (success) {
        state.profile = profile;
        pipSaveTeacherProfile(profile ?? {});
      }
      state.isLoading = false;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.isLoading = false;
    });
    // update-profile
    builder.addCase(updateProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { toggleChange, handleCurrentStep } = authSlice.actions;
export default authSlice.reducer;
