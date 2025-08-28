import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: {},
  selectedChat: null,
  chatMessages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
    setChatMessages: (state, action) => {
      state.chatMessages = action.payload;
    },
  },
});

export const { setChats, setSelectedChat, setChatMessages } = chatSlice.actions;
export default chatSlice.reducer;
