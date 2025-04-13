import { ChatContext } from '../../context/ChatContext';
import useChat from '../../hooks/useChat';
import React from 'react';

function ChatSidebar() {
  const [chats, setChats] = React.useState([]);
  const {setChatId } = React.useContext(ChatContext)
  const { getChats,  getChatId} = useChat();

  // getChats().then((response) => {
  //   setChats(response.chats);
  // });

  const handleChatClick = (id) => {
    setChatId(id);
  };

  const handleNewChatClick = async ()=>{
    let id = await getChatId()
    setChatId(id);
  }

  React.useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await getChats();
        setChats(response.chats);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
  }
  , []);

  return (
    <aside className="w-64 bg-white border-r border-zinc-200 flex flex-col p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Chats</h2>
      <nav className="flex flex-col gap-2">
        {chats.length === 0 && (
          <p className="text-gray-500">No chats available</p>
        )}
        {chats.map((chat) => (
          <button
            key={chat.chatId}
            onClick={() => handleChatClick(chat.chatId)}
            className="text-left px-4 py-2 rounded-lg hover:bg-zinc-100 transition"
          >
            {chat.chatId}
          </button>
        ))}
        <button className='text-left px-4 py-2 rounded-lg hover:bg-zinc-100 transition'
          onClick={() => handleNewChatClick()}
        >Nuevo Chat</button>
      </nav>
    </aside>
  );
}

export default ChatSidebar;
