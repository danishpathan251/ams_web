import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm Danish Khan. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);
  const [isTyping, setIsTyping] = useState(false); // ✅ added
  const messagesEndRef = useRef(null); // ✅ added

// useEffect(() => {
//   const ws = new WebSocket("wss://chatbot.alpha-ms.xyz/api/chat");
//   setSocket(ws);

//   ws.onopen = () => {
//     console.log("WebSocket connected");
//   };

//   ws.onmessage = (event) => {
//     const data = JSON.parse(event.data);

//     // Accept all messages (adjust if needed)
//     setIsTyping(false);
//     setMessages((prev) => [...prev, data]);
//   };

//   ws.onerror = (error) => {
//     console.error("WebSocket error:", error);
//   };

//   ws.onclose = () => {
//     console.log("WebSocket disconnected");
//   };

//   return () => {
//     ws.close();
//   };
// }, []);

const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = { name: "user", reply: input };
  setMessages((prev) => [...prev, userMessage]);

  setIsTyping(true);

  try {
    const response = await fetch("https://chatbot.alpha-ms.xyz/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();

    setMessages((prev) => [...prev, { name: data.name, reply: data.reply }]);
  } catch (error) {
    console.error("API error:", error);
  } finally {
    setIsTyping(false);
  }

  setInput("");
};

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-red-50 to-rose-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#C62828] to-red-700 text-white p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Danish Khan</h1>
            <p className="text-red-100 text-sm">AI Assistant</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              msg.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Avatar */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.sender === "bot"
                  ? "bg-[#C62828] text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              {msg.sender === "bot" ? (
                <Bot className="w-4 h-4" />
              ) : (
                <User className="w-4 h-4" />
              )}
            </div>

            {/* Message Bubble */}
            <div className="max-w-[70%]">
              <div
                className={`p-3 rounded-2xl shadow-sm ${
                  msg.sender === "bot"
                    ? "bg-white text-gray-800 rounded-tl-md"
                    : "bg-gray-700 text-white rounded-tr-md"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-line">
                  {msg.text}
                </p>
              </div>
              <div
                className={`text-xs text-gray-500 mt-1 px-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                {msg.sender === "bot" ? "Danish Khan" : "You"}
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#C62828] text-white rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white p-3 rounded-2xl rounded-tl-md shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
              </div>
            </div>
          </div>
        )}

        {/* Auto-scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex gap-3 items-end">
          <div className="flex-1 relative">
            <input
              type="text"
              className="w-full p-3 pr-12 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#C62828] focus:border-transparent resize-none"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
            />
          </div>
          <button
            className="bg-[#C62828] hover:bg-red-800 text-white p-3 rounded-xl transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
