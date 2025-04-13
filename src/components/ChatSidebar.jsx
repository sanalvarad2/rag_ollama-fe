import { useChatContext } from '../../context/ChatContext';

function ChatSidebar() {
  const { setChatId } = useChatContext();

  const handleChatClick = (id) => {
    setChatId(id);
  };

  return (
    <aside className="w-64 bg-white border-r border-zinc-200 flex flex-col p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Chats</h2>
      <nav className="flex flex-col gap-2">
        <button onClick={() => handleChatClick(1)} className="text-left px-4 py-2 rounded-lg hover:bg-zinc-100 transition">Chat 1</button>
        <button onClick={() => handleChatClick(2)} className="text-left px-4 py-2 rounded-lg hover:bg-zinc-100 transition">Chat 2</button>
        <button onClick={() => handleChatClick(3)} className="text-left px-4 py-2 rounded-lg hover:bg-zinc-100 transition">Chat 3</button>
      </nav>
    </aside>
  );
}

export default ChatSidebar;
