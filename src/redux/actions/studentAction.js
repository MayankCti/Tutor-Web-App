import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from ".";
import {
  teacherCreateStudentAPI,
  teacherStudentListAPI,
  teacherUpdateStudentAPI,
} from "../../routes/endPoints";

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