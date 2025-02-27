import React, { useEffect, useRef } from "react";

const ChatWindow = ({ chatHistory, isLoading }) => {
  const chatContainerRef = useRef(null);

  // Scroll to the bottom of the chat container whenever chatHistory updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div
      ref={chatContainerRef}
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "70vh",
        overflowY: "auto",
        border: "1px solid #444",
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: "#2a2a2a",
        marginBottom: "20px",
      }}
    >
      {chatHistory.map((chat, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: chat.sender === "user" ? "flex-end" : "flex-start",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: chat.sender === "user" ? "#4a90e2" : "#444",
              color: "#ffffff",
              padding: "10px",
              borderRadius:
                chat.sender === "user" ? "10px 10px 0 10px" : "10px 10px 10px 0",
              maxWidth: "70%",
            }}
          >
            {chat.text}
          </div>
        </div>
      ))}
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "#444",
              color: "#ffffff",
              padding: "10px",
              borderRadius: "10px 10px 10px 0",
              maxWidth: "70%",
            }}
          >
            Thinking...
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;