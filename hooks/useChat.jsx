import { useContext } from 'react';
import { AxiosContext } from '../context/axiosContext';
import * as chatService from '../services/chat';

const useChat = () => {
  const {axios} = useContext(AxiosContext);

  const preguntar = (pregunta, chatId) => chatService.preguntar(axios, pregunta, chatId);
  const getChatId = () => chatService.getChatId(axios);

  return {
    preguntar,
    getChatId,
  };
};

export default useChat;