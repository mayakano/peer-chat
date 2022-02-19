import axios from "axios";
import React, { useEffect, useState } from "react";

//making our first API call to render our data from the backend to the frontend
//axios package allows us to fetch from our API
//axios uses async/await

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const chatData = await axios.get("/api/chat");
    setChats(chatData.data);
  };

  //useEffect is a hook in react which runs when the component is rendered for the first time

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
