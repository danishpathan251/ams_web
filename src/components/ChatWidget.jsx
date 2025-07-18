import React, { useState } from "react";
import ChatBot from "./Chatbot"; // Your full chatbot component
import { Bot } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#C62828] hover:bg-red-800 text-white p-4 rounded-full shadow-lg"
          >
            <Bot className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] h-[500px] bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200 flex flex-col">
          <div className="flex justify-between items-center bg-[#C62828] text-white px-4 py-2">
            <span className="font-semibold">Chat with Danish Khan</span>
            <button onClick={() => setIsOpen(false)} className="text-white text-sm hover:opacity-80">
              ✕
            </button>
          </div>
          <ChatBot />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
