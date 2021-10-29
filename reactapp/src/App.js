import React, { useState } from 'react';
import './App.css';
import {Message} from './components/Message'
import {Counter} from './components/Counter'


function App() {
  const [text, setText]= useState("We start learn REACT")

  const handleClick = () => {
    setText("And I like it!")
  }
  return (
    <div className="App">
      <header className="App-header">
        <Message message={text}  onMessageClick={handleClick}/>
        <Counter />
      </header>
    </div>
  );
}

export default App;
