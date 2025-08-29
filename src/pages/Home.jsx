import React from "react";
import ChatInput from "../components/ChatInput";
import ChatArea from "../components/ChatArea";
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { setChatMessages } from "../store/reducers/chatSlice";
import { asyncFetchChatMessages } from "../store/actions/chatActions";

const Home = () => {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const [socket, setSocket] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { selectedChat, chatMessages } = useSelector(
    (state) => state.chatReducer
  );

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_API_URL, {
      transports: ["websocket", "polling"],
      withCredentials: true,
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    if (!content.trim() || !selectedChat?._id) {
      return;
    }

    if (!socket) {
      return;
    }

    socket.emit("ai-message", { chat: selectedChat._id, content });
    setContent("");

    await dispatch(asyncFetchChatMessages(selectedChat._id));

    socket.on("ai-response", async (data) => {
      await dispatch(asyncFetchChatMessages(selectedChat._id));
    });
  };

  useEffect(() => {
    dispatch(asyncFetchChatMessages(selectedChat?._id));
  }, [selectedChat]);

  return (
    <div className="w-full h-screen flex bg-zinc-900 text-white ">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="relative w-full mx-auto h-screen flex flex-col items-center">
        <TopNav setIsOpen={setIsOpen} />
        <ChatArea chatMessages={chatMessages} />
        <ChatInput
          sendMessageHandler={sendMessageHandler}
          content={content}
          setContent={setContent}
        />
      </div>
    </div>
  );
};

export default Home;
