import React from "react";

export const Message = ({message, onMessageClick}) => {
    //const message = props.message 
    return <h3 className="header" onClick={onMessageClick}>{message} </h3>
}