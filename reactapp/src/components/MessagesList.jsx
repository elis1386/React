import React from "react";

export const MessagesList = ({messages}) => (
   <div>
       {messages.map((message => 
       <div>
           <span>{message.author}</span> : <span>{message.text}</span>
        </div>
        ))}
       </div>
)
