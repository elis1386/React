import React, { useRef, useState } from "react";
import { Authors } from "../utils/costans";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Button';

export const Addform = ({onSendMessage}) => {
   const [value, setValue] = useState('')
   const inputRef = useRef()

   const changeHandle = (event) => {
       setValue(event.target.value)
   }

   const  submitHandler = (event) => {
    event.preventDefault()
    onSendMessage({
        text:value,
        author: Authors.human,
        id: Date.now()
    })
    setValue('')
    }

    return(
        <form className="add" onSubmit={submitHandler}> 
        <Form.Control type="text" placeholder="Please enter text" 
         id="standsrd-basic" label="Standard" 
         variant="standard" value={value} 
         inputRef={inputRef} onChange={changeHandle}/>
        <Button  variant="primary" type="submit">Send</Button>
        </form>  
        )
    }