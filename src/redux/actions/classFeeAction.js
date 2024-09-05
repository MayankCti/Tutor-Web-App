import { API_REQUEST } from ".";

import {
  teacherCreateClassAPI,
  teacherFetchClassListAPI,
} from "../../routes/endPoints";
import { createAsyncThunk } from "@reduxjs/toolkit";

// fetch-classes
export const fetchClasses = createAsyncThunk("fetch-classes", async () => {
  try {
    const response = await API_REQUEST({
      url: teacherFetchClassListAPI,
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
