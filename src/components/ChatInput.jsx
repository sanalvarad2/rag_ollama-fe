import React from 'react';

const ChatInput = () => {
  return (
    <form className="mt-auto flex items-center gap-2 border-t border-zinc-200 pt-4">
      <input
        type="text"
        placeholder="Pregunta..."
        className="flex-1 p-3 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
      >
        ➤
      </button>
    </form>
  );
};

export default ChatInput;