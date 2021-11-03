import React from "react";

export const MessagesList = ({messages}) => (
   <div key={messages.id}>
       {messages.map((message => 
       <div>
           <span>{message.author}</span>: <span>{message.text}</span>
        </div>
        ))}
       </div>
)
