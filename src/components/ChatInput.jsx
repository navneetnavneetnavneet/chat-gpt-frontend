import React from "react";

const ChatInput = ({ sendMessageHandler, content, setContent }) => {
  return (
    <div className="w-full md:max-w-[75vw] lg:max-w-[65vw] px-4 py-2 absolute bottom-0">
      <div className="w-full px-2 py-1 md:py-2 rounded-full bg-zinc-800 ">
        <form
          onSubmit={sendMessageHandler}
          className="w-full flex items-center gap-2 justify-between"
        >
          <i className="ri-add-line text-xl md:text-lg px-3 py-2 flex items-center justify-center rounded-full hover:bg-zinc-700 cursor-pointer"></i>
          <input
            onChange={(e) => setContent(e.target.value)}
            value={content}
            type="text"
            placeholder="Ask anything"
            className="w-full py-2 outline-0 border-none bg-transparent"
          />
          <button className="px-3 py-2 flex-srink-0 flex items-center justify-center rounded-full hover:bg-zinc-700 cursor-pointer">
            <i className="ri-arrow-up-line text-xl md:text-lg"></i>
          </button>
        </form>
      </div>
      <p className="text-xs font-thin text-center mt-2">
        ChatGPT can make mistakes. Check important info. See{" "}
        <span className="underline cursor-pointer">Cookie Preferences.</span>
      </p>
    </div>
  );
};

export default ChatInput;
