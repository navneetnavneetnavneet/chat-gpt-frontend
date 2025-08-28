import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import chatSlice from "./reducers/chatSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    chatReducer: chatSlice,
  },
});
