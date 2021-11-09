import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'




export const ChatList = (props) => {
  return (
      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li" className="d-flex justify-content-start">
          <div className="ms-2 me-auto"><span className="fw-bold">Chat 1</span></div>
        <Badge variant="primary" pill>14</Badge>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-start">
          <div className="ms-2 me-auto"><span className="fw-bold">Chat 2</span></div>
        <Badge variant="primary" pill>3</Badge>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-start">
          <div className="ms-2 me-auto"><span className="fw-bold">Chat 3</span></div>
        <Badge variant="primary" pill>24</Badge>
        </ListGroup.Item>
      </ListGroup>
   
)}


