import React, { useRef, useState, useEffect,  } from "react";
import { Authors } from "../utils/costans";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


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

    // useEffect(() => {
    //   inputRef.current?.focus();
    // }, [])

    return(
        <form className="add" onSubmit={submitHandler}>
        <InputGroup  className="mb-3">
            <FormControl
                autoFocus
                placeholder="Please enter text"
                value={value} 
                inputRef={inputRef} 
                onChange={changeHandle}
            />
            <Button variant="primary" type="submit">Send</Button>
        </InputGroup>
        </form> 
        )
    }