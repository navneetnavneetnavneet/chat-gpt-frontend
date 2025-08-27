import React from "react";
import ChatInput from "../components/ChatInput";
import ChatArea from "../components/ChatArea";
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="w-full h-screen flex bg-zinc-900 text-white ">
      <Sidebar />

      <div className="relative w-full md:w-[80%] h-screen flex flex-col items-center">
        <TopNav />
        <ChatArea />
        <ChatInput />
      </div>
    </div>
  );
};

export default Home;
