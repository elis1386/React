import { useState } from 'react';
import './App.css';
import {Message} from './components/Message';


function App() {
  const [text, setText]= useState("We start learn REACT")

  const handleClick = () => {
    setText("And I like it!")
  }
  return (
    <div className="App">
      <header className="App-header">
        <Message message={text}  onMessageClick={handleClick}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
