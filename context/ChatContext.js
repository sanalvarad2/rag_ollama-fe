import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [chatId, setChatId] = useState(null);

  return (
    <ChatContext.Provider value={{ chatId, setChatId }}>
      {children}
    </ChatContext.Provider>
  );
};