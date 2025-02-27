import React, { useState } from "react";

const ChatInput = ({ onSubmit, isLoading }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Don't send empty messages
    onSubmit(message);
    setMessage(""); // Clear the input field
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        maxWidth: "600px",
        display: "flex",
        gap: "10px",
      }}
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #444",
          backgroundColor: "#2a2a2a",
          color: "#ffffff",
        }}
      />
      <button
        type="submit"
        disabled={isLoading}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#4a90e2",
          color: "#ffffff",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;