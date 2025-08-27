import React from "react";

const TopNav = () => {

  return (
    <nav className="w-full flex items-center justify-between py-2">
      <h2 className="text-2xl md:text-xl font-normal tracking-tight ml-2 px-3 py-2 rounded-md hover:bg-zinc-700 duration-200 cupo cursor-pointer">
        ChatGPT
      </h2>
      <i className="ri-chat-1-line text-xl md:text-lg mr-2 px-3 py-2 rounded-md hover:bg-zinc-700 duration-200 cupo cursor-pointer"></i>
    </nav>
  );
};

export default TopNav;
