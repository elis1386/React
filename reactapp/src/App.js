import React, { useCallback, useEffect, useState } from 'react';
import './App.css'
import {Addform} from './components/Addform'
import { ChatList } from './components/ChatList';
import { MessagesList } from './components/MessagesList';
import { Authors } from './utils/costans';


const mesArray = [
  {
    text: 'Good morning',
    author: Authors.human
  }
]
function App() {
  const [messages, setMessages] = useState(mesArray)

  const handleSendMessage = useCallback((newMessage) => {
      setMessages(prevMessages => [...prevMessages, newMessage])
  },[messages])
  
  useEffect(() => {
    if(messages.length && messages[messages.length -1].author !== Authors.bot){
    const timeout = setTimeout( () => handleSendMessage({
      author: Authors.bot, 
      text: "Hello, I'm a bot",
      id: Date.now()
    }), 1500)
      return () => clearTimeout(timeout)
    }
  },[messages])

  return (
    <div className="App">
        
      <header className="App-header">
        <ChatList />
        <MessagesList messages={messages} />
        <Addform  onSendMessage={handleSendMessage}/>
      </header>
    </div>
  );
}

export default App;
