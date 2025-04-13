import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AxiosProvider } from '../context/axiosProvider'
import App from './App.jsx'
import { ChatProvider } from '../context/ChatContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AxiosProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </AxiosProvider>
  </StrictMode>,
)
