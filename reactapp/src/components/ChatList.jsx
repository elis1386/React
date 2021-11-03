import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'




export const ChatList = () => {
  return (
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li" className="d-flex justify-content-start">
            <div className="ms-2 me-auto">
              <span className="fw-bold">User</span> &nbsp;
            </div>
            <Badge variant="primary" pill>14</Badge>
            </ListGroup.Item>
          </ListGroup>
   
)}


