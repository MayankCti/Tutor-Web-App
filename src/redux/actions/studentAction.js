import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from ".";
import {
  getAllTeacherList,
  getClassByTeacher,
  teacherCreateStudentAPI,
  teacherDashboardAPI,
  teacherDeleteStudentAPI,
  teacherStudentListAPI,
  teacherUpdateStudentAPI,
  teacherUploadFileAPI,
} from "../../routes/endPoints";

// fetch-dashboard
export const fetchDashboard = createAsyncThunk(
  "fetch-dashboard",
  async () => {
    try {
      const response = await API_REQUEST({
        url: teacherDashboardAPI,
        method: "GET",
      });
      return response;
    } catch (error) {}
  }
);

// fetch-student-list
export const fetchStudentList = createAsyncThunk(
  "fetch-student-list",
  async () => {
    try {
      const response = await API_REQUEST({
        url: teacherStudentListAPI,
        method: "GET",
      });
      return response;
    } catch (error) {}
  }
);

// create-student
export const createStudent = createAsyncThunk(
  "create-student",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: teacherCreateStudentAPI,
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

// upload-student-file
export const uploadStudentFile = createAsyncThunk(
  "upload-student-file",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: teacherUploadFileAPI,
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

// update-student
export const updateStudent = createAsyncThunk(
  "update-student",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: teacherUpdateStudentAPI,
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

// delete-student
export const deleteStudent = createAsyncThunk(
  "delete-student",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: teacherDeleteStudentAPI,
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