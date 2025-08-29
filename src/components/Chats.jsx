import { useDispatch, useSelector } from "react-redux";
import { setSelectedChat } from "../store/reducers/chatSlice";
import { asyncFetchChatMessages } from "../store/actions/chatActions";

const Chats = () => {
  const dispatch = useDispatch();

  const { chats, selectedChat } = useSelector((state) => state.chatReducer);

  return (
    <section className="py-2 px-2 max-h-[65vh] overflow-y-auto overflow-x-hidden">
      <h3 className="text-base font-normal tracking-tight opacity-60 px-2 py-2">
        Chats
      </h3>
      {chats.length > 0 ? (
        chats.map((chat) => (
          <button
            key={chat._id}
            onClick={() => {
              dispatch(setSelectedChat(chat));
              dispatch(asyncFetchChatMessages(chat._id));
            }}
            className={`${
              selectedChat && selectedChat?._id === chat._id
                ? "bg-zinc-800"
                : ""
            } w-full text-start block text-base font-normal tracking-tight mb-1 leading-tight px-2 py-2 rounded-md hover:bg-zinc-800 duration-200 cursor-pointer`}
          >
            {chat.title.slice(0, 25)}
          </button>
        ))
      ) : (
        <h3 className="text-xs tracking-tight text-center opacity-30">
          no chats here.
        </h3>
      )}
    </section>
  );
};

export default Chats;
