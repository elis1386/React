import React, { useCallback, useState } from "react";
import './App.css'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Chats from "../components/Chats";
import { Home } from "../components/Home";
import { User } from "../components/User";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import { ChatList } from "../components/ChatList";
import { ThemeContex } from "./utils/themeContext";


return(
  <ThemeContex.Provider value={{color, toggleColor}}>
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
</ThemeContex.Provider>
)
