import { API_REQUEST } from ".";
import {
  getAllTeacherList,
  getClassByTeacher,
  studentBillingAPI,
  studentMyBookedClasses,
  teacherBillingAPI,
  teacherClassesAPI,
  teacherClassesFilterAPI,
  teacherCreateClassAPI,
  teacherCreateClassTypeAPI,
  teacherDeleteClassTypeAPI,
  teacherFetchClassTypeListAPI,
  teacherUpdateClassTypeAPI,
} from "../../routes/endPoints";
import { createAsyncThunk } from "@reduxjs/toolkit";

// fetch-classes
export const fetchClasses = createAsyncThunk("fetch-classes-", async () => {
  try {
    const response = await API_REQUEST({
      url: teacherClassesAPI,
      method: "GET",
      isErrorToast: false,
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
export const fetchClassesTypes = createAsyncThunk(
  "fetch-classes-types",
  async () => {
    try {
      const response = await API_REQUEST({
        url: teacherFetchClassTypeListAPI,
        method: "GET",
      });
      return response;
    } catch (error) {}
  }
);

// create-class-type
export const createClassType = createAsyncThunk(
  "create-class-type",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: teacherCreateClassTypeAPI,
        method: "POST",
        data: payload,
        isErrorToast: true,
      });
      callback(response);
      return response;
    } catch (error) {
      callback(null, error);
    }
  }
);

// update-class-type
export const updateClassType = createAsyncThunk(
  "update-class-type",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: teacherUpdateClassTypeAPI,
        method: "POST",
        data: payload,
        isErrorToast: true,
      });
      callback(response);
      return response;
    } catch (error) {
      callback(null, error);
    }
  }
);

// delete-class-type
export const deleteClassType = createAsyncThunk(
  "delete-class-type",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: teacherDeleteClassTypeAPI,
        method: "DELETE",
        data: payload,
      });
      callback(response);
      return response;
    } catch (error) {
      callback(null, error);
    }
  }
);

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
        url: getClassByTeacher + `/${payload}`,
        method: "GET",
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
export const fetchBillingStudent = createAsyncThunk(
  "fetch-billing-student",
  async () => {
    try {
      const response = await API_REQUEST({
        url: studentBillingAPI,
        method: "GET",
      });
      return response;
    } catch (error) {}
  }
);

// fetch-my-booked-classes
export const fetchMyBookedClasses = createAsyncThunk(
  "fetch-my-booked-classes",
  async () => {
    try {
      const response = await API_REQUEST({
        url: studentMyBookedClasses,
        method: "GET",
      });
      return response;
    } catch (error) {}
  }
);
