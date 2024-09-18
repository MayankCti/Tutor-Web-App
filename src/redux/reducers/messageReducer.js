import { createSlice } from "@reduxjs/toolkit";
import {
  chatMessages,
  fetchAllStudentChatList,
  fetchChatList,
  startChat,
} from "../actions/messagesActions";

const initialState = {
  isLoading: false,
  isToggle: false,
  isSlider: false,
  allStudentList: [],
  chatList: [],
  chats: [],
  activeChatDetail: [],
  options1: [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
  ],
};

export const messageSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    toggleChatBar: (state, action) => {
      state.isToggle = action?.payload;
    },
    toggleSlider: (state, action) => {
      state.isSlider = action?.payload;
    },
    setActiveChatDetail: (state, action) => {
      state.activeChatDetail = action?.payload;
    },
    setFilterChatList: (state, action) => {
      let temp = [];

      const filteredItem = state?.chatList?.find(
        (item) => item?.id === state?.activeChatDetail?.id
      );

      if (state?.chatList[0]?.id === filteredItem?.id) return;

      temp = state?.chatList?.filter(
        (item) => item?.id !== state?.activeChatDetail?.id
      );

      if (filteredItem && state?.chatList[0]?.id !== filteredItem?.id) {
        temp.unshift(filteredItem);
        state.chatList = temp;
      }
    },
  },

  extraReducers: (builder) => {
    // fetch-all-student-chat-list
    builder.addCase(fetchAllStudentChatList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllStudentChatList.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      state.allStudentList = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchAllStudentChatList.rejected, (state, action) => {
      state.isLoading = false;
    });

    // start-chat
    builder.addCase(startChat.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(startChat.fulfilled, (state, action) => {
      const { success } = action?.payload ?? {};
      if (!success) {
        return;
      }
      state.isToggle = true;
      state.isSlider = false;
      state.isLoading = false;
    });
    builder.addCase(startChat.rejected, (state, action) => {
      state.isLoading = false;
    });

    // fetch-chat-list
    builder.addCase(fetchChatList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchChatList.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      state.chatList = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchChatList.rejected, (state, action) => {
      state.isLoading = false;
    });

    // chat-messages
    builder.addCase(chatMessages.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(chatMessages.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      state.isToggle = true;
      state.chats = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(chatMessages.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {
  toggleChatBar,
  toggleSlider,
  setActiveChatDetail,
  setFilterChatList,
} = messageSlice?.actions;
export default messageSlice.reducer;
