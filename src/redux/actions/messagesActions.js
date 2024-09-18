import { API_REQUEST } from ".";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  teacherChatListAPI,
  teacherChatMessagesAPI,
  teacherStartChatAPI,
  teacherStudentsListAPI,
} from "../../routes/endPoints";

// fetch-all-student-chat-list
export const fetchAllStudentChatList = createAsyncThunk(
  "fetch-all-student-chat-list",
  async (props) => {
    const params = {};
    params.search = props ?? "";
    try {
      const response = await API_REQUEST({
        url: teacherStudentsListAPI,
        method: "GET",
        isErrorToast: false,
        params: params,
      });
      return response;
    } catch (error) {}
  }
);

// start-chat
export const startChat = createAsyncThunk(
  "start-chat",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: teacherStartChatAPI,
        method: "POST",
        data: payload,
        isErrorToast: true,
        isSuccessToast: false,
      });
      callback(response);
      return response;
    } catch (error) {
      callback(error);
    }
  }
);

// fetch-chat-list
export const fetchChatList = createAsyncThunk("fetch-chat-list", async () => {
  try {
    const response = await API_REQUEST({
      url: teacherChatListAPI,
      method: "GET",
      isErrorToast: false,
    });
    return response;
  } catch (error) {}
});


// chat-messages
export const chatMessages = createAsyncThunk(
  "chat-messages",
  async (props) => {
    const { payload } = props;
    try {
      const response = await API_REQUEST({
        url: teacherChatMessagesAPI,
        method: "POST",
        data: payload,
        isErrorToast: true,
        isSuccessToast: false,
      });
      return response;
    } catch (error) {
    }
  }
);