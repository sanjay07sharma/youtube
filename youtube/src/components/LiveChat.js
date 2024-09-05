import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  // setup long polling
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state.chat.message);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: "Sanjay Sharma",
          message: "Hello, How are you?",
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="w-full h-600 border border-black bg-slate-100 overflow-y-scroll">
      {chatMessages.map((chatMessage, index) => <ChatMessage name={chatMessage.name} message={chatMessage.message} />)
      }
    </div>
  );
};

export default LiveChat;
