import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  chats: [],
  isToggle: false,
  isSlider: false,
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
  },

  extraReducers: (builder) => {
    
  },
});

export const {toggleChatBar, toggleSlider} = messageSlice?.actions;
export default messageSlice.reducer;