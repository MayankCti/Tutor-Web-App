import { createSlice } from "@reduxjs/toolkit";
import {
  pipGetRegisterStep,
  pipSaveStudentProfile,
  pipSaveTeacherProfile,
  pipSetRegisterStep,
} from "../../utils/pip";
import {
  bankDetail,
  createBasicDetail,
  fetchProfile,
  fetchStudentProfile,
  studentAndPricing,
  studentChangePassword,
  teacherChangePassword,
  teacherForgotPassword,
  teacherlogin,
  teacherRegister,
  updateProfile,
} from "../actions/authAction";

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
    // auth-change-password
    builder.addCase(teacherChangePassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(teacherChangePassword.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(teacherChangePassword.rejected, (state, action) => {
      state.isLoading = false;
    });
    // fetch-profile
    builder.addCase(fetchProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      const { data, success } = action?.payload ?? {};
      const { teacher, stream, theme } = success ? data : {};
      const {
        profile_image,
        full_name,
        email,
        username,
        coaching_classes_name,
        address,
        contact_number,
        per_hour_pricing,
        max_student_headcount,
        id,
      } = teacher ?? {};
      const { theme_color } = theme ?? {};
      const { stream_name } = stream ?? {};
      const profile = {
        profile_image,
        full_name,
        email,
        stream_name,
        theme_color,
        username,
        file: profile_image,
        stream: stream_name,
        theme: theme_color,
        coaching_classes_name,
        address,
        contact_number,
        max_student_headcount: max_student_headcount,
        per_hour_pricing: per_hour_pricing,
        id,
      };
      if (success) {
        const root = document.documentElement;

        const lightenColor = (color, percent) => {
          const num = parseInt(color?.slice(1), 16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) + amt,
            G = ((num >> 8) & 0x00ff) + amt,
            B = (num & 0x0000ff) + amt;
          return (
            "#" +
            (
              0x1000000 +
              (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
              (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
              (B < 255 ? (B < 1 ? 0 : B) : 255)
            )
              .toString(16)
              .slice(1)
              .toUpperCase()
          );
        };

        const lighterTheme = lightenColor(theme_color, 40);

        root.style.setProperty("--dark_purple", theme_color);
        root.style.setProperty("--light_purple_bg", lighterTheme);
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
    // create-basic-detail
    builder.addCase(createBasicDetail.fulfilled, (state, action) => {
      const { success } = action?.payload ?? {};
      if (success) {
        pipSetRegisterStep(2);
        state.currentStep = 2;
      }
      state.isLoading = false;
    });
    builder.addCase(createBasicDetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createBasicDetail.rejected, (state, action) => {
      state.isLoading = false;
    });
    //  student-and-pricing
    builder.addCase(studentAndPricing.fulfilled, (state, action) => {
      const { success } = action?.payload ?? {};
      if (success) {
        pipSetRegisterStep(3);
        state.currentStep = 3;
      }
      state.isLoading = false;
    });
    builder.addCase(studentAndPricing.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(studentAndPricing.rejected, (state, action) => {
      state.isLoading = false;
    });
    //  Bank-details
    builder.addCase(bankDetail.fulfilled, (state, action) => {
      const { success } = action?.payload ?? {};
      if (success) {
        pipSetRegisterStep(4);
        state.currentStep = 4;
      }
      state.isLoading = false;
    });
    builder.addCase(bankDetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(bankDetail.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(fetchStudentProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStudentProfile.fulfilled, (state, action) => {
      const { data, success } = action?.payload ?? {};

      if (success) pipSaveStudentProfile(data);
      state.isLoading = false;
    });
    builder.addCase(fetchStudentProfile.rejected, (state, action) => {
      state.isLoading = false;
    });

      // auth-change-password
      builder.addCase(studentChangePassword.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(studentChangePassword.fulfilled, (state, action) => {
        state.isLoading = false;
      });
      builder.addCase(studentChangePassword.rejected, (state, action) => {
        state.isLoading = false;
      });

  },
});

export const { toggleChange, handleCurrentStep } = authSlice.actions;
export default authSlice.reducer;
