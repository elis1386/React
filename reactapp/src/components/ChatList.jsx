import React from "react";
import {  NavLink } from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup'
import Container from "react-bootstrap/esm/Container";




export const ChatList = ({chatList}) => {
  return (
    <Container className="mt-4">
      
        {chatList.map((chat) => (
        <ListGroup className="items" as="ol" > 
        <NavLink className="mt-4" 
        style={({ isActive }) => ({ color: isActive ? 'pacific' : 'grey' })}
        to={`/chats/${chat.id}`}>{chat.name}</NavLink>
      </ListGroup>

))}
        {/* <div className="ms-2 me-auto"><span className="fw-bold"></span></div> */}

    </Container>
)}


