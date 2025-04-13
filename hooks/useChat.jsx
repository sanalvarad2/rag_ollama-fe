import { useContext } from 'react';
import { AxiosContext } from '../context/axiosContext';
import * as chatService from '../services/chat';

const useChat = () => {
  const {axios} = useContext(AxiosContext);

  const preguntar = async(pregunta, chatId) => await chatService.preguntar(axios, pregunta, chatId);
  const getChatId = async() => await chatService.getChatId(axios);
  const getChat = async(chatId) => await chatService.getChat(axios, chatId);
  const getChats = async() => await chatService.getChats(axios);

  return {
    preguntar,
    getChatId,
    getChat,
    getChats
  };
};

export default useChat;