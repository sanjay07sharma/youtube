import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  // setup long polling
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state.chat.message);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="w-full h-[600px] border border-black bg-slate-100 overflow-y-auto gap-2">
      {chatMessages.map((chatMessage, index) => (
        <ChatMessage key={index} name={chatMessage.name} message={chatMessage.message} />
      ))}
    </div>
  );
};

export default LiveChat;
