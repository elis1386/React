import React from "react";

export const Message = ({message, onMessageClick}) => {
    //const message = props.message 
    return <h3 onClick={onMessageClick}>{message} </h3>
}