import { API_REQUEST } from ".";
import {
  getAllTeacherList,
  getClassByTeacher,
  studentBillingAPI,
  studentBookClasses,
  studentMyBookedClasses,
  studentPayFee,
  teacherBillingAPI,
  teacherClassesAPI,
  teacherClassesFilterAPI,
  teacherClassStudentListAPI,
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

// book-class
export const BookClass = createAsyncThunk("book-class", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: studentBookClasses,
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

// fetch-teacher-classes
export const fetchTeacherClasses = createAsyncThunk(
  "fetch-teacher-classes",
  async (props, { rejectWithValue }) => {
    try {
      const { payload, callback } = props;
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
export const fetchBilling = createAsyncThunk("fetch-billing", async (props) => {
  try {
    const params = {};
    params.month = props;
    const response = await API_REQUEST({
      url: teacherBillingAPI,
      method: "GET",
      params,
    });
    return response;
  } catch (error) {}
});

// fetch-billing-student
export const fetchBillingStudent = createAsyncThunk(
  "fetch-billing-student",
  async (props) => {
    try {
      const params = {};
      params.month = props;
      const response = await API_REQUEST({
        url: studentBillingAPI,
        method: "GET",
        params,
      });
      return response;
    } catch (error) {}
  }
);

// fetch-my-booked-classes
export const fetchMyBookedClasses = createAsyncThunk(
  "fetch-my-booked-classes",
  async (props) => {
    try {
      const params = {};
      params.month = props;
      const response = await API_REQUEST({
        url: studentMyBookedClasses,
        method: "GET",
        params,
      });
      return response;
    } catch (error) {}
  }
);

// pay-billing
export const payBilling = createAsyncThunk("pay-billing", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: studentPayFee,
      method: "POST",
      data: payload,
    });
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});

// fetch-classes-students
export const fetchClassesStudents = createAsyncThunk(
  "fetch-classes-students",
  async (props) => {
    try {
      const response = await API_REQUEST({
        url: teacherClassStudentListAPI + `/${props}`,
        method: "GET",
      });
      return response;
    } catch (error) {}
  }
);
