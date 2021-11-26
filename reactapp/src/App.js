import React, { useCallback, useState } from "react";
import './App.css'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import {useDispatch, useSelector } from "react-redux";
import Chats from "./components/Chats";
import { Home } from "./components/Home";
import { User } from "./components/User";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import { ChatList } from "./components/ChatList";
import { addChat,deleteChat } from "./Store/chats/actions";



const mesArray = {}


export const App = () => {
    const chatList = useSelector(state => state.chats)
    const dispatch = useDispatch()
    const [messages, setMessages] = useState(mesArray)

    const handleAddChat = useCallback((name) => {
      const newId = `chat${Date.now()}`;
  
      dispatch(addChat({ name, id: newId }))
      setMessages(prevMessages => ({
        ...prevMessages,
        [newId]: [],
      }));
    }, [dispatch]);

    const handleDeleteChat = useCallback((idToDelete) => {
      dispatch(deleteChat(idToDelete))
      setMessages(prevMessages => {
        const newMessages = { ...prevMessages };
        delete newMessages[idToDelete];
  
        return newMessages;
      });
    }, []);
  
    

return(
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
                  <Route index element={<ChatList chatList={chatList} onAddChat={handleAddChat} onDeleteChat={handleDeleteChat}/>} />
                  <Route path=":chatId"  element={
                     <Chats 
                     chatList={chatList} 
                     messages={messages} 
                     setMessages={setMessages} 
                     onAddChat={handleAddChat} 
                     onDeleteChat={handleDeleteChat}
                     /> 
                     } 
                     />
                </Route>
                <Route path='/user'element={<User />} />
                <Route path='*' element={<h2>Sorry!We'r haven't this page</h2>}/>
            </Routes>
        </Container>
    </BrowserRouter>
)
}

export default App
 



