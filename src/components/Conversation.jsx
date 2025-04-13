import React from 'react';
import Message from './Message';

import { useChatContext } from '../../context/ChatContext';

const Conversation = () => {
  const { chatId } = useChatContext();
  

  return (
    <section className="flex flex-col flex-1 p-6 overflow-y-auto">
      <div className="space-y-4">
        <Message text="Pregunta 1" isUser={true} />
        <Message text="Respuesta 1" document="Documentos usados" isUser={false} />
      </div>
    </section>
  );
};

export default Conversation;