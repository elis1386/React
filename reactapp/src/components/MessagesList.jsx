import React, {useState} from "react";

export const MessagesList = () => {
    const[messages, setMessages] = useState([])
    
   return messages.map((message) => <div>{message}</div>)
}