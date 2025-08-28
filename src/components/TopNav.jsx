import React from "react";

const TopNav = () => {
  return (
    <nav className="w-full flex items-center justify-between py-2">
      <h2 className="text-2xl md:text-xl font-normal tracking-tight md:ml-2 px-3 py-2 rounded-md md:hover:bg-zinc-800 duration-200 cupo cursor-pointer">
        <i className="ri-menu-line text-xl md:hidden pr-1"></i>
        ChatGPT
      </h2>
      <i className="ri-chat-1-line text-xl md:text-lg md:mr-2 px-3 py-2 rounded-md md:hover:bg-zinc-800 duration-200 cupo cursor-pointer"></i>
    </nav>
  );
};

export default TopNav;
