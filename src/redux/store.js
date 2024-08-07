import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import studentReducer from "./reducers/studentReducer";
import classFeeReducer from "./reducers/classFeeReducer";

const store = configureStore({
  reducer: {
    authReducer,
    studentReducer,
    classFeeReducer,
  },
});

export default store;
