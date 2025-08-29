import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import ChatArea from "../components/ChatArea";
import ChatInput from "../components/ChatInput";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useEffect } from "react";
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

    if (!socket || !content.trim() || !selectedChat?._id) {
      return;
    }

    socket.emit("ai-message", { chat: selectedChat._id, content });
    setContent("");

    await dispatch(asyncFetchChatMessages(selectedChat._id));
  };

  useEffect(() => {
    if (!socket) return;

    const handler = async (data) => {
      if (selectedChat?._id) {
        await dispatch(asyncFetchChatMessages(selectedChat._id));
      }
    };

    socket.on("ai-response", handler);

    return () => {
      socket.off("ai-response", handler);
    };
  }, [socket, selectedChat, dispatch]);

  useEffect(() => {
    if (selectedChat?._id) {
      dispatch(asyncFetchChatMessages(selectedChat._id));
    }
  }, [selectedChat, dispatch]);

  return (
    <section className="relative w-full h-screen text-white bg-zinc-900 mx-auto flex flex-col items-center">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <TopNav setIsOpen={setIsOpen} />
      <ChatArea chatMessages={chatMessages} />
      <ChatInput
        sendMessageHandler={sendMessageHandler}
        content={content}
        setContent={setContent}
      />
    </section>
  );
};

export default Home;
