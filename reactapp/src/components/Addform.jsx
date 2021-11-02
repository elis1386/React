import React, { useRef, useState } from "react";
import { Authors } from "../utils/costans";

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
            <input type="text" value={value} ref={inputRef} onChange={changeHandle} />
            <button className="btn" type="submit"> Send </button>
        </form>  
        )
    }