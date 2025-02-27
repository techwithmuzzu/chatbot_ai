import React, { useState } from "react";
import axios from "axios";
import ChatHistory from "./components/ChatHistory";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (message) => {
    setIsLoading(true);
    setChatHistory((prev) => [...prev, { sender: "user", text: message }]);

    try {
      const res = await axios.post("http://localhost:5000/chat", {
        message,
      });
      const aiResponse = res.data.response;

      // Simulate dynamic typing for AI response
      for (let i = 0; i < aiResponse.length; i++) {
        const typedResponse = aiResponse.substring(0, i + 1);
        setChatHistory((prev) => [
          ...prev.slice(0, -1),
          { sender: "ai", text: typedResponse },
        ]);
        await new Promise((resolve) => setTimeout(resolve, 50)); // Adjust typing speed
      }
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => [
        ...prev,
        { sender: "ai", text: "Sorry, something went wrong!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectChat = async (userInput) => {
    try {
      // Fetch the full chat based on the user input
      const res = await axios.get("http://localhost:5000/chat-history");
      const fullChat = res.data.find((chat) => chat.user_input === userInput);
      if (fullChat) {
        setChatHistory([
          { sender: "user", text: fullChat.user_input },
          { sender: "ai", text: fullChat.ai_response },
        ]);
      }
    } catch (error) {
      console.error("Error fetching full chat:", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "20px",
      }}
    >
      <ChatHistory onSelectChat={handleSelectChat} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Simple Chat App</h1>
        <ChatWindow chatHistory={chatHistory} isLoading={isLoading} />
        <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;