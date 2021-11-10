import React from "react";
import './App.css'
import { BrowserRuoter, Link, Route, Routes } from 'react-router-dom'
import Chats from "./components/Chats";

export const App = () => (
  <BrowserRuoter>
        <ul>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/chats'>Chats</Link>
            </li>
        </ul>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Chats />} />
    </Routes>
</BrowserRuoter>
)

 



