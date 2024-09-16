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
    <form onSubmit={
      (e) => {
        e.preventDefault();
        // handle form submission
        if (e.target[0].value) {
          dispatch(
            addMessage({
              name: "You",
              message: e.target[0].value,
            })
          );
        }
        e.target[0].value = "";
      }
    }>
      <div className="w-full h-[565px] border border-black bg-slate-100 overflow-y-auto gap-2 flex flex-col-reverse">
        {chatMessages.map((chatMessage, index) => (
          <ChatMessage key={index} name={chatMessage.name} message={chatMessage.message} />
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Type your message here"
          className="w-[75%] h-10 border border-black"
        />
        <button className="w-[25%] h-10 bg-blue-500 text-white">Send</button>
      </div>
    </form>
  );
};

export default LiveChat;
