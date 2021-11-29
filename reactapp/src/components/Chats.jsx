import React, { useCallback, useEffect } from 'react';
import {Addform} from './Addform'
import { ChatList } from './ChatList';
import { MessagesList } from './MessagesList';
import { Authors } from '../utils/costans';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Navigate, useParams  } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../store/messages/selectors';
import { addMessage } from '../store/messages/actions';




function Chats() {
  const {chatId} = useParams()
  const messages = useSelector(selectMessages)
  const dispatch = useDispatch()


  const handleSendMessage = useCallback((newMessage) => {
    dispatch(addMessage(chatId, newMessage))  
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
        <Col sm={4} md={4}>
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
