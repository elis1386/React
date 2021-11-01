import React, { useState } from 'react';
import './App.css'
import {Message} from './components/Message'
// import {Counter} from './components/Counter'
import {Addform} from './components/Addform'
import { MessagesList } from './components/MessagesList';



function App() {
  const [text, setText]= useState("We start learn REACT")
  const handleClick = () => {
    setText("And I like it!")
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Message text={text}  onMessageClick={handleClick}/>
        {/* <Counter /> */}
        <Addform />
        <MessagesList  />
      </header>
    </div>
  );
}

export default App;
