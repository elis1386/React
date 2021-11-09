import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'



export const MessagesList = ({messages}) => (
    <div key={messages.id} >
       {messages.map((message => 
        <ListGroup horizontal={'md'} className="my-4">
            <ListGroup.Item><span>{message.author}</span></ListGroup.Item>
            <ListGroup.Item><span>{message.text}</span></ListGroup.Item>
        </ListGroup>
        ))}
    </div>
       
)
