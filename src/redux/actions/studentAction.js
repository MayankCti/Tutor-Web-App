import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from ".";
import {
  getAllTeacherList,
  getClassByTeacher,
  teacherCreateStudentAPI,
  teacherDeleteStudentAPI,
  teacherStudentListAPI,
  teacherUpdateStudentAPI,
  teacherUploadFileAPI,
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
// export const fetchTeacherClasses = createAsyncThunk(
//   "fetch-teacher-classes",
//   async (props) => {
//     try {
//       const { payload, callback } = props;
//       const response = await API_REQUEST({
//         url: getClassByTeacher,
//         method: "POST",
//         payload: payload,
//       });
//       return response;
//     } catch (error) {}
//   }
// );

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
