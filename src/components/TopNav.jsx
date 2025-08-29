import React from "react";

const TopNav = ({ setIsOpen, title = "ChatGPT" }) => {
  return (
    <nav className="w-full flex items-center justify-between py-2">
      <button
        onClick={() => setIsOpen(true)}
        className="text-2xl flex items-center gap-1 md:text-xl font-normal tracking-tight md:ml-2 px-3 py-2 rounded-md md:hover:bg-zinc-800 duration-200 cursor-pointer"
      >
        <i className="ri-menu-line text-xl md:text-lg"></i>
        <span>{title}</span>
      </button>
      <button
        aria-label="Open chat list"
        className="ri-chat-1-line text-xl md:text-lg md:mr-2 px-3 py-2 rounded-md md:hover:bg-zinc-800 duration-200 cursor-pointer"
      ></button>
    </nav>
  );
};

export default TopNav;
