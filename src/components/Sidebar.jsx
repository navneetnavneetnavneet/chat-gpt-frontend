import React from "react";
import Chats from "./Chats";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncCreateChat } from "../store/actions/chatActions";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  const createNewChatHandler = async () => {
    const title = prompt("Please enter your chat title : ");

    if (title?.trim() === "") {
      return toast.warn("Chat title is required !");
    }

    if (title === null) {
      return;
    }

    await dispatch(asyncCreateChat(title.trim()));
    toast.success("Chat is created successfully");
  };

  return (
    user && (
      <div
        className={`absolute top-0 ${
          isOpen ? "left-0" : "-left-60"
        } duration-500 transition-transform ease-linear z-[999] w-60 bg-zinc-900 flex flex-col h-screen px-2 py-2 border-r border-zinc-600 overflow-y-auto overflow-x-hidden`}
      >
        <div className="w-full flex items-center justify-between py-2">
          <i className="ri-app-store-line text-lg px-3 py-2 rounded-md hover:bg-zinc-800 duration-200 cursor-pointer"></i>
          <i
            onClick={() => setIsOpen(false)}
            className="ri-close-line text-lg px-2 md:px-3 py-2 rounded-md hover:bg-zinc-800 duration-200 cursor-pointer"
          ></i>
        </div>

        <div className="py-2">
          <div
            onClick={createNewChatHandler}
            className="w-full flex items-center md:gap-2 px-2 py-2 rounded-md hover:bg-zinc-800 duration-200 cursor-pointer"
          >
            <i className="ri-edit-box-line text-lg"></i>
            <h3 className="text-base font-normal tracking-tight">New chat</h3>
          </div>
          <div className="w-full flex items-center md:gap-2 px-2 py-2 rounded-md hover:bg-zinc-800 duration-200 cursor-pointer">
            <i className="ri-search-line text-lg"></i>
            <h3 className="text-base font-normal tracking-tight">
              Search chats
            </h3>
          </div>
          <div className="w-full flex items-center md:gap-2 px-2 py-2 rounded-md hover:bg-zinc-800 duration-200 cursor-pointer">
            <i className="ri-gallery-line text-lg"></i>
            <h3 className="text-base font-normal tracking-tight">Library</h3>
          </div>
        </div>

        <Chats />

        <div className="w-full px-2 py-2 flex items-center z-[999] bg-zinc-900 absolute left-0 bottom-0">
          <div className="w-full px-2 py-2 flex items-center gap-2 rounded-md hover:bg-zinc-800 duration-200 cursor-pointer">
            <div className="w-6 h-6 px-2 flex items-center justify-center rounded-full bg-green-800">
              {user.fullName.firstName.slice(0, 1).toUpperCase()}
            </div>
            <div className="flex flex-col">
              <h3 className="leading-none text-sm font-normal tracking-tight">
                {user.fullName.firstName}
              </h3>
              <small className="text-xs font-normal tracking-tight opacity-60">
                Free
              </small>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
