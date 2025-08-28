import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChat } from "../store/reducers/chatSlice";
import { asyncFetchChatMessages } from "../store/actions/chatActions";

const Chats = () => {
  const dispatch = useDispatch();

  const { chats, selectedChat } = useSelector((state) => state.chatReducer);

  return (
    <div className="py-2 h-[80vh] overflow-y-auto overflow-x-hidden">
      <h3 className="text-base font-normal tracking-tight opacity-60 px-2 py-2">
        Chats
      </h3>
      {chats.length > 0 ? (
        chats.map((chat) => (
          <h3
            key={chat._id}
            onClick={async () => {
              await dispatch(setSelectedChat(chat));
              await dispatch(asyncFetchChatMessages(chat._id));
            }}
            className={`${
              selectedChat && selectedChat?._id === chat._id
                ? "bg-zinc-800"
                : ""
            } text-base font-normal tracking-tight mb-1 leading-tight px-2 py-2 rounded-md hover:bg-zinc-800 duration-200 cupo`}
          >
            {chat.title.slice(0, 25)}
          </h3>
        ))
      ) : (
        <h3 className="text-xs tracking-tight text-center opacity-30">
          no chats here.
        </h3>
      )}
    </div>
  );
};

export default Chats;
