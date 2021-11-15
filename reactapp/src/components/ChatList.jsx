import React from "react";
import {  NavLink } from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup'
import Container from "react-bootstrap/esm/Container";




export const ChatList = ({chatList}) => {
  return (
    <Container className="mt-4">
      <ListGroup as="ol" > 
        {chatList.map((chat) => <NavLink className="mt-4" 
        style={({ isActive }) => ({ color: isActive ? 'pacific' : 'grey' })}
        to={`/chats/${chat.id}`}>{chat.name}</NavLink>)}
        {/* <div className="ms-2 me-auto"><span className="fw-bold"></span></div> */}
      </ListGroup>
    </Container>
)}


