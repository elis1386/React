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
import {  addMessageWithReply } from '../store/messages/actions';
import { push } from 'firebase/database';
import { getChatMsgsListRefId, getChatMsgsRefId } from '../services/firebase';


function Chats({msgs}) {
  const {chatId} = useParams()
  const messages = useSelector(selectMessages)
  const dispatch = useDispatch()


  const handleSendMessage = useCallback((newMessage) => {
    // dispatch(addMessageWithReply(chatId, newMessage))
    push(getChatMsgsListRefId(chatId), newMessage)  
  },[chatId])

  if (!msgs[chatId]){
    return <Navigate replace to='/chats' />
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col sm={4} md={4}>
        <ChatList />
        </Col>
        <Col sm={6}>
           <MessagesList messages={msgs[chatId]} />
           <Addform  onSendMessage={handleSendMessage}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Chats;
