import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatHistory = ({ onSelectChat }) => {
  const [chatTitles, setChatTitles] = useState([]);

  useEffect(() => {
    const fetchChatTitles = async () => {
      try {
        const res = await axios.get("http://localhost:5000/chat-titles");
        setChatTitles(res.data);
      } catch (error) {
        console.error("Error fetching chat titles:", error);
      }
    };

    fetchChatTitles();
  }, []);

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#2a2a2a",
        padding: "10px",
        overflowY: "auto",
      }}
    >
      <h3 style={{ color: "#ffffff", marginBottom: "10px" }}>Chat History</h3>
      {chatTitles.map((chat, index) => (
        <div
          key={index}
          onClick={() => onSelectChat(chat.user_input)}
          style={{
            backgroundColor: "#444",
            color: "#ffffff",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          {chat.user_input.substring(0, 30)}... {/* Show only the first 30 characters */}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;