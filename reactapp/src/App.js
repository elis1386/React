import React, { useCallback, useEffect, useState } from 'react';
import './App.css'
import {Addform} from './components/Addform'
import { ChatList } from './components/ChatList';
import { MessagesList } from './components/MessagesList';
import { Authors } from './utils/costans';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





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
  },[])
  
  useEffect(() => {
    if(messages.length && 
      messages[messages.length -1].author !== Authors.bot)
      { const timeout = setTimeout( 
      () => 
      handleSendMessage({
      author: Authors.bot, 
      text: "Hello, I'm a bot",
      id: Date.now()
    }), 1500)
    return () => clearTimeout(timeout)
    }
  },[messages])

  return (
    <div className="App">
      <Container >
       <Row>
        <Col sm={4} md={3}>
           <ChatList />
        </Col>
        <Col sm={6}>
           <MessagesList messages={messages} />
           <Addform  onSendMessage={handleSendMessage}/>
        </Col>
       </Row>
     </Container>
    </div>
  );
}

export default App;
