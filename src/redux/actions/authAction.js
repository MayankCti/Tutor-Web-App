import { API_REQUEST } from ".";
import { teacherChangePasswordAPI, teacherCreateBasicDetailsAPI, teacherStudentAndPricingAPI, teachForgotPasswordAPI, teachLoginAPI, teachProfileAPI, teachRegisterAPI, teachUpdateProfileAPI } from "../../routes/endPoints";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { pipSetAccessToken } from "../../utils/pip";

// auth-register
export const teacherRegister = createAsyncThunk(
  "auth-register",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: teachRegisterAPI,
        method: "POST",
        data: payload,
      });
      callback(response);
      return response;
    } catch (error) {
      callback(null, error);
    }
  }
);
// auth-login
export const teacherlogin = createAsyncThunk("auth-login", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: teachLoginAPI,
      method: "POST",
      data: payload,
      isErrorToast: true,
    });
    pipSetAccessToken(response?.data);
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});
// auth-forgot-password
export const teacherForgotPassword = createAsyncThunk("auth-forgot-password",async (props) => {
  const { payload, callback } = props;
  try {
      const response = await API_REQUEST({
        url: teachForgotPasswordAPI,
        method: "POST",
        data: payload,
        isErrorToast : true
      });
      callback(response);
      return response

    } catch (error) {
      callback(null, error);
    }
})
// auth-change-password
export const teacherChangePassword = createAsyncThunk("auth-change-password",async (props) => {
  const { payload, callback } = props;
  try {
      const response = await API_REQUEST({
        url: teacherChangePasswordAPI,
        method: "POST",
        data: payload,
      });
      callback(response);
      return response
    } catch (error) {
      callback(null, error);
    }
})

// fetch-profile
export const fetchProfile = createAsyncThunk("fetch-profile", async () => {
  try {
    const response = await API_REQUEST({
      url: teachProfileAPI,
      method: "GET",
    });
    return response;
  } catch (error) {}
});
// update-profile
export const updateProfile = createAsyncThunk("update-profile",async (props) => {
  const { payload, callback } = props;
  try {
      const response = await API_REQUEST({
        url: teachUpdateProfileAPI,
        method: "POST",
        data: payload,
        isErrorToast : true
      });
      callback(response);
      return response

    } catch (error) {
      callback(null, error);
    }
})
// create-basic-detail
export const createBasicDetail = createAsyncThunk("create-basic-detail",async (props) => {
  const { payload} = props;
  try {
      const response = await API_REQUEST({
        url: teacherCreateBasicDetailsAPI,
        method: "POST",
        data: payload,
        isErrorToast : false
      });
      return response
    } catch (error) {
    }
})

// student-and-pricing
export const studentAndPricing = createAsyncThunk("student-and-pricing",async (props) => {
  const { payload} = props;
  try {
      const response = await API_REQUEST({
        url: teacherStudentAndPricingAPI,
        method: "POST",
        data: payload,
        isErrorToast : false
      });
      return response
    } catch (error) {
    }
})