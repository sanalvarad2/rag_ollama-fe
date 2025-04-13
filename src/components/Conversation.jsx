import React, {useEffect, useMemo} from 'react';
import Message from './Message';

import { useChatContext } from '../../context/ChatContext';
import useChat from '../../hooks/useChat';

const Conversation = () => {
  const [conversations, setConversations] = React.useState([]);
  
  const { chatId } = useChatContext();
  const { getChat } = useChat();
  const allConversations = useMemo(() => {
    return [...conversations]}, [conversations]);


  


  useEffect(() => {
    const fetchChat = async () => {
      const conver  = await getChat(chatId);
      console.log(conver);
      setConversations(conver.conversations);
    };
    fetchChat();
  }
  , [chatId]);
  // const { conversations } = getChat(chatId);

  if (!chatId) {
    return <div className="flex items-center justify-center h-full">No chat selected</div>;
  }

  return (
    <section className="flex flex-col flex-1 p-6 overflow-y-auto">
      <div className="space-y-4">
        {allConversations.map((conversation, index) => (
          <React.Fragment key={index}>
            <Message text={conversation.user_message} isUser={true} />
            <Message text={conversation.ai_response} document="Documentos usados" isUser={false} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Conversation;