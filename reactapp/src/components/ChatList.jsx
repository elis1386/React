import {React, useState} from "react";
import { ChatItem } from "./ChatItem";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';


export const ChatList = ({chatList, onAddChat,}) => {
  const [value, setValue] = useState('')
  
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    onAddChat(value)

    setValue('')
  }
  return (
    <Container  className="mt-4">
        {chatList.map((chat) => (<ChatItem chat={chat}/>))}
    <Col sm={4} md={6}>
     <Form  className="mt-4" onSubmit={handleSubmit}>
        <Form.Control as="textarea" rows={1} value={value} onChange={handleChange} />
        <Button className="mt-4 btn" variant="success" size="sm" type="submit" onAddChat={onAddChat}>Add new chat</Button>
      </Form > 
    </Col>
    </Container>
)}


