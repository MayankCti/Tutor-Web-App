import { API_REQUEST } from ".";

import {
  getAllTeacherList,
  getClassByTeacher,
  studentBillingAPI,
  teacherBillingAPI,
  teacherClassesAPI,
  teacherClassesFilterAPI,
  teacherCreateClassAPI,
  teacherFetchClassTypeListAPI,
} from "../../routes/endPoints";
import { createAsyncThunk } from "@reduxjs/toolkit";

// fetch-classes
export const fetchClasses = createAsyncThunk("fetch-classes-", async () => {
  try {
    const response = await API_REQUEST({
      url: teacherClassesAPI,
      method: "POST",
      isErrorToast:false
    });
    return response;
  } catch (error) {}
});

// filter-classes
export const filterClasses = createAsyncThunk(
  "filter-classes",
  async (props) => {
    const { classType, month } = props;
    const params = {};
    if (classType) params.classType = classType;
    if (month) params.month = month;
    try {
      const response = await API_REQUEST({
        url: teacherClassesFilterAPI,
        method: "GET",
        params: params,
        
      });
      return response;
    } catch (error) {}
  }
);



// fetch-classes-types
export const fetchClassesTypes = createAsyncThunk("fetch-classes-types", async () => {
  try {
    const response = await API_REQUEST({
      url: teacherFetchClassTypeListAPI,
      method: "GET",
    });
    return response;
  } catch (error) {}
});

// create-class
export const createClass = createAsyncThunk("create-student", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: teacherCreateClassAPI,
      method: "POST",
      data: payload,
      isErrorToast: true,
    });
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});

// get-teacher-list
export const getTeacherList = createAsyncThunk("get-teacher-list", async () => {
  try {
    const response = await API_REQUEST({
      url: getAllTeacherList,
      method: "GET",
    });
    return response;
  } catch (error) {}
});

// fetch-teacher-classes
export const fetchTeacherClasses = createAsyncThunk(
  "fetch-teacher-classes",
  async (props, { rejectWithValue }) => {
    try {
      const { payload, callback } = props;
      console.log(payload);
      const response = await API_REQUEST({
        url: getClassByTeacher,
        method: "POST",
        data: payload,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// fetch-billing
export const fetchBilling = createAsyncThunk("fetch-billing", async () => {
  try {
    const response = await API_REQUEST({
      url: teacherBillingAPI,
      method: "GET",
    });
    return response;
  } catch (error) {}
});

// fetch-billing-student
export const fetchBillingStudent = createAsyncThunk("fetch-billing-student", async () => {
  try {
    const response = await API_REQUEST({
      url: studentBillingAPI,
      method: "GET",
    });
    return response;
  } catch (error) {}
});