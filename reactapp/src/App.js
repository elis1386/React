import React from "react";
import './App.css'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Chats from "./components/Chats";
import { Home } from "./components/Home";
import { User } from "./components/User";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import { ChatList } from "./components/ChatList";


const App = () => (
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
            <Route index element={<ChatList />} />
            <Route path=":chatId" element={<Chats />}/>
        </Route>
        <Route path='/user'element={<User />} />
    </Routes>
    </Container>
</BrowserRouter>
)


export default App
 



