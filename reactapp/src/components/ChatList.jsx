import React from "react";
import {  NavLink } from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup'
import Container from "react-bootstrap/esm/Container";


const chatList = [
  {
    name: 'Chat 1',
    id: 'chat1'
  },
  {
    name: 'Chat 2',
    id: 'chat2'
  },
  {
    name: 'Chat 3',
    id: 'chat3'
  },

]

export const ChatList = () => {
  return (
    <Container className="mt-4">
      <ListGroup as="ol" numbered>
        {chatList.map(chat => <NavLink style={({ isActive }) => ({ color: isActive ? 'pacific' : 'grey' })}to={`/chats/${chat.id}`}>{chat.name}</NavLink>)}
        {/* <div className="ms-2 me-auto"><span className="fw-bold"></span></div> */}
      </ListGroup>
    </Container>
)}


