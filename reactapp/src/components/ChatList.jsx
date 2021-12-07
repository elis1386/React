import {React, useEffect, useState} from "react";
import { ChatItem } from "./ChatItem";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import { selectChats } from '../store/chats/selectors'
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../store/chats/actions";
import { onValue, set } from "firebase/database";
import { chatsRef, getChatMsgsRefId, getChatRefId } from "../services/firebase";



export const ChatList = () => {
  const [chats, setChats] = useState([])
  const chatList = useSelector(selectChats);
  const dispatch = useDispatch();
  const [value, setValue] = useState('')

  useEffect(() => [
    onValue(chatsRef, (chatSnap) => {
      const newChats = []
      chatSnap.forEach((snapshot) => {
        newChats.push(snapshot.val())
      })
      setChats(newChats)
    })
  ],[])
  
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()

  const newId = `chat${Date.now()}`;
    // dispatch(addChat({ name: value, id: newId }));
    set(getChatRefId(newId), { name: value, id: newId })
    set(getChatMsgsRefId(newId), {empty: true})
    setValue('')
  }
  return (
    <Container  className="mt-4">
        {chats.map((chat) => (<ChatItem chat={chat}/>))}
    <Col sm={4} md={6}>
     <Form  className="mt-4" onSubmit={handleSubmit}>
        <Form.Control as="textarea" rows={1} value={value} onChange={handleChange} />
        <Button className="mt-4" variant="success" size="sm" type="submit">Add new chat</Button>
      </Form > 
    </Col>
    </Container>
)}


