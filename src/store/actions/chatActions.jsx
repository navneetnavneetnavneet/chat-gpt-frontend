import axios from "../../utils/axios";
import {
  setChatMessages,
  setChats,
  setSelectedChat,
} from "../reducers/chatSlice";

export const asyncFetchAllChat = () => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.get("/chat/");

    console.log(data);
    if (data && status === 200) {
      await dispatch(setChats(data));
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncCreateChat = (title) => async (dispatch, getState) => {
  try {
    const { data, status } = await axios.post("/chat/", { title });

    if (data && status === 201) {
      await dispatch(setSelectedChat(data));
      await dispatch(asyncFetchAllChat());
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncFetchChatMessages =
  (chatId) => async (dispatch, getState) => {
    try {
      const { data, status } = await axios.get(`/chat/messages/${chatId}`);

      if (data && status === 200) {
        await dispatch(setChatMessages(data));
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
