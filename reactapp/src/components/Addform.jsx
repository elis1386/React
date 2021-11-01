import React, { useState } from "react";

export const Addform = () => {
   const [value, setValue] = useState('')

   const changeHandle = (event) => {
       setValue(event.target.value)
   }

   const  submitHandler = (event) => {
    event.preventDefault()
    console.log({value})
    setValue('')
    }

    return(
        <form className="add" onSubmit={submitHandler}> 
            <input type="text" value={value} onChange={changeHandle} />
            <button className="btn" type="submit"> Send </button>
        </form>  
        )
    }