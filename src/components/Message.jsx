import React from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toast } from "react-toastify";

const Message = ({ message }) => {
  const handleCopy = (message) => {
    navigator.clipboard
      .writeText(message)
      .then(() => {
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    message && (
      <div
        className={`w-fit max-w-full mb-5 ${
          message.role === "user" ? "ml-auto" : "mr-auto"
        }`}
      >
        <small
          className={`${
            message.role === "user" ? "text-end" : "text-start"
          } text-xs w-full block opacity-60 tracking-tight`}
        >
          {message.role == "user" ? "User" : "AI"}
        </small>
        {message.role === "user" ? (
          <p
            className={`${
              message.role === "user" ? "px-4 rounded-full" : "px-4 rounded-xl"
            } py-2 bg-zinc-800`}
          >
            {message.content}
          </p>
        ) : (
          <ReactMarkdown
            children={message.content}
            components={{
              p: ({ node, ...props }) => (
                <p className="leading-relaxed my-2" {...props} />
              ),
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    customStyle={{
                      borderRadius: "0.5rem",
                      fontSize: "1rem",
                      overflowX: "auto",
                      maxWidth: "100%",
                      fontStyle: "italic",
                    }}
                    language={match[1]}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          ></ReactMarkdown>
        )}
        {message.role === "model" && (
          <>
            <div className="w-full h-[1px] my-2 bg-zinc-600" />
            <div className="flex items-center gap-5">
              <i
                onClick={() => handleCopy(message.content)}
                className="ri-file-copy-line text-xl md:text-lg cursor-pointer"
              ></i>
              <i className="ri-thumb-up-line text-xl md:text-lg cursor-pointer"></i>
              <i className="ri-thumb-down-line text-xl md:text-lg cursor-pointer"></i>
              <i className="ri-volume-up-line text-xl md:text-lg cursor-pointer"></i>
              <i className="ri-share-line text-xl md:text-lg cursor-pointer"></i>
              <i className="ri-refresh-line text-xl md:text-lg cursor-pointer"></i>
            </div>
          </>
        )}
      </div>
    )
  );
};

export default Message;
