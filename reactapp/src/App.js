import React, { useCallback, useState } from "react";
import './App.css'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import { Provider } from "react-redux";
import Chats from "./components/Chats";
import { Home } from "./components/Home";
import { User } from "./components/User";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import { ChatList } from "./components/ChatList";
import { ThemeContex } from "./utils/themeContext";
import { Authors } from './utils/costans';
import { store } from "./Store";



const mesArray = {
    chat1:[
    {
      text: 'Good morning',
      author: Authors.human
    },
    {
      text: 'Could u pls to help me',
      author: Authors.human
    },{
      text: 'Sure',
      author: Authors.bot
    },
   ],
   chat2:[
    {
      text: 'Good morning',
      author: Authors.human
    }
   ],
   chat3:[
    {
      text: 'Good morning',
      author: Authors.human
    },
    {
      text: 'Hey, how can I help u',
      author: Authors.bot
    },
   ],
  
  }
  const chatsArray = [
    {
      name: 'Chat 1',
      id: 'chat1'
    },
    {
      name: 'Chat 2',
      id: 'chat2'
    },
    {
      name: 'Chat 3',
      id: 'chat3'
    },
  ]


export const App = () => {
    const [chatList, setChatlist] = useState(chatsArray)
    const [messages, setMessages] = useState(mesArray)
    
    const[color, setColor]= useState('lightblue')
    
    const toggleColor = useCallback(() => {
        setColor(prevColor => prevColor === 'lightblue' ? 'lightgreen' : 'orange')
    },[])


return(
<ThemeContex.Provider value={{color, toggleColor}}>
    <Provider store={store}>
    <BrowserRouter>
        <Container className="mt-4">
            <ul>
                <Button variant="outline-info" size="sm" className="mr-5">
                <Link className="text" to='/'>Home</Link>
                </Button>
                <Button variant="outline-info"size="sm">
                <Link className="text" to='/chats'>Chats</Link>
                </Button>
                <Button variant="outline-info"size="sm">
                <Link className="text" to='/user'>User</Link>
                </Button>
            </ul>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='chats'>
                  <Route index element={<ChatList chatList={chatList} />} />
                  <Route path=":chatId"  element={ <Chats chatList={chatList} messages={messages} setMessages={setMessages} /> } />
                </Route>
                <Route path='/user'element={<User />} />
                <Route path='*' element={<h2>Sorry!We'r haven't this page</h2>}/>
            </Routes>
        </Container>
    </BrowserRouter>
    </Provider>
</ThemeContex.Provider>
)
}

export default App
 



