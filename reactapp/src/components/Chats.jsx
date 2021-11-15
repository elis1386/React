import React, { useCallback, useEffect, useState } from 'react';
// import './App.css'
import {Addform} from './Addform'
import { ChatList } from './ChatList';
import { MessagesList } from './MessagesList';
import { Authors } from '../utils/costans';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router';
import {  Navigate } from 'react-router';


const mesArray = {
  chat1:[
  {
    text: 'Good morning',
    author: Authors.human
  },
  {
    text: 'Could u pls to help me',
    author: Authors.human
  },{
    text: 'Sure',
    author: Authors.bot
  },
 ],
 chat2:[
  {
    text: 'Good morning',
    author: Authors.human
  }
 ],
 chat3:[
  {
    text: 'Good morning',
    author: Authors.human
  },
  {
    text: 'Hey, how can I help u',
    author: Authors.bot
  },
 ],

}


function Chats() {
  const {chatId} = useParams()

  const [messages, setMessages] = useState(mesArray)

  const handleSendMessage = useCallback((newMessage) => {
      setMessages((prevMessages) => ({...prevMessages, [chatId]: [...prevMessages[chatId], newMessage] }))
  },[chatId])
  
  useEffect(() => {
    if(messages[chatId]?.length && 
      messages[chatId]?.[messages[chatId]?.length -1].author !== Authors.bot)
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

  if (!messages[chatId]){
    return <Navigate replace to='/chats' />
  }

  return (
      <Container className="mt-4">
       <Row>
        <Col sm={4} md={3}>
           <ChatList />
        </Col>
        <Col sm={6}>
           <MessagesList messages={messages[chatId]} />
           <Addform  onSendMessage={handleSendMessage}/>
        </Col>
       </Row>
     </Container>
  );
}

export default Chats;
