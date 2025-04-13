import React from 'react';
import ChatSidebar from './components/ChatSidebar';
import DocumentTabs from './components/DocumentTabs';
import Conversation from './components/Conversation';
import ChatInput from './components/ChatInput';

const App = () => {
  return (
    <div className="flex h-screen">
    
      {/* Sidebar */}
      <ChatSidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Document Tabs */}
        <DocumentTabs />

        {/* Conversation */}
        <Conversation />

        {/* Chat Input */}
        <ChatInput />
      </div>
    </div>
  );
};

export default App;