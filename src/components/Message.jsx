import React from 'react';

function Message({ text, isUser }) {
  const backgroundColor = isUser ? 'bg-blue-100' : 'bg-green-100';
  const alignment = isUser ? 'justify-end' : 'justify-start';
  const textAlignment = isUser ? 'text-right' : 'text-left';

  return (
    <div className={`flex ${alignment}`}>
      <div className={`${backgroundColor} ${textAlignment} p-4 rounded-2xl shadow max-w-2xl`}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Message;