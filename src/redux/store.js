import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import studentReducer from "./reducers/studentReducer";
import classFeeReducer from "./reducers/classFeeReducer";
import messageReducer from "./reducers/messageReducer";

const store = configureStore({
  reducer: {
    authReducer,
    studentReducer,
    classFeeReducer,
    messageReducer,

  },
});

export default store;
