import Message from "../components/Message";

const ChatArea = ({ chatMessages }) => {
  return (
    <section className="w-full md:max-w-[75vw] lg:max-w-[65vw] px-4 py-2 h-[75vh] overflow-y-auto overflow-x-hidden">
      {chatMessages.length === 0 && (
        <div className="flex flex-col gap-2 items-center justify-center text-center mt-40">
          <h4 className="px-4 py-2 text-xs tracking-tight opacity-60 bg-zinc-800 rounded-full">
            Early Preview
          </h4>
          <h1 className="text-4xl font-medium tracking-tighter leading-none">
            ChatGPT Clone
          </h1>
          <p className="w-full px-4 sm:w-2/3 md:w-1/2 text-center text-sm opacity-60">
            Ask anything, Paste text, brainstrom ideas, or get quick
            explainations. Your chats stay in the sidebar so you can pick up
            where you left off.
          </p>
        </div>
      )}

      {chatMessages.map((message) => (
        <Message message={message} key={message._id} />
      ))}
    </section>
  );
};

export default ChatArea;
