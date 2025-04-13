import React from 'react';

const DocumentTabs = () => {
  return (
    <header className="flex items-center gap-2 bg-zinc-50 px-6 py-3 border-b border-zinc-200 shadow-sm">
      <button className="px-4 py-2 rounded-xl bg-blue-100 text-blue-800 font-medium hover:bg-blue-200 transition">Doc 1</button>
      <button className="px-4 py-2 rounded-xl bg-blue-100 text-blue-800 font-medium hover:bg-blue-200 transition">Doc 2</button>
    </header>
  );
};

export default DocumentTabs;