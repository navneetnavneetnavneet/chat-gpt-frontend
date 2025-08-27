import React from "react";
import Chats from "./Chats";

const Sidebar = () => {
  const createNewChatHandler = () => {
    const title = prompt("Please enter your chat title : ");

    console.log(title);
  };

  return (
    <div className="relative sidebar hidden md:flex flex-col md:w-[20%] h-screen px-2 py-2 border-r border-zinc-600">
      <div className="w-full flex items-center justify-between">
        <i className="ri-app-store-line text-lg px-3 py-2 rounded-md hover:bg-zinc-700 duration-200 cupo"></i>
        <i className="ri-layout-left-line text-lg px-3 py-2 rounded-md hover:bg-zinc-700 duration-200 cupo"></i>
      </div>

      <div className="py-2">
        <div
          onClick={createNewChatHandler}
          className="w-full flex items-center gap-2 px-2 py-2 rounded-md hover:bg-zinc-700 duration-200 cupo"
        >
          <i className="ri-edit-box-line text-lg"></i>
          <h3 className="text-base font-normal tracking-tight">New chat</h3>
        </div>
        <div className="w-full flex items-center gap-2 px-2 py-2 rounded-md hover:bg-zinc-700 duration-200 cupo">
          <i className="ri-search-line text-lg"></i>
          <h3 className="text-base font-normal tracking-tight">Search chats</h3>
        </div>
        <div className="w-full flex items-center gap-2 px-2 py-2 rounded-md hover:bg-zinc-700 duration-200 cupo">
          <i className="ri-gallery-line text-lg"></i>
          <h3 className="text-base font-normal tracking-tight">Library</h3>
        </div>
      </div>

      <Chats />

      <div className="w-full px-2 py-2 flex items-center absolute left-0 bottom-0">
        <div className="w-full px-2 py-2 flex items-center gap-2 rounded-md hover:bg-zinc-700 duration-200 cupo">
          <div className="w-6 h-6 px-2 rounded-full bg-green-800"></div>
          <div className="flex flex-col">
            <h3 className="leading-none text-sm font-normal tracking-tight">
              navneet
            </h3>
            <small className="text-xs font-normal tracking-tight opacity-60">
              Free
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
