import {React, useState} from "react";
import {  NavLink } from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup'
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
        {chatList.map((chat) => (
        <ListGroup className="items" as="ol" > 
        <NavLink className="mt-4" 
        style={({ isActive }) => ({ color: isActive ? 'pacific' : 'grey' })}
        to={`/chats/${chat.id}`}>{chat.name}</NavLink>
      </ListGroup>
      ))}
    <Col sm={4} md={6}>
     <Form  className="mt-4" onSubmit={handleSubmit}>
        <Form.Control as="textarea" rows={1} value={value} onChange={handleChange} />
        <Button className="mt-4" variant="success" size="sm" type="submit" onAddChat={onAddChat}>Add new chat</Button>
      </Form > 
    </Col>
    </Container>
)}


