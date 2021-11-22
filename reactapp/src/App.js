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
import { ThemeContex } from "./utils/themeContext";
import { addChat,deleteChat } from "./Store/chats/actions";



const mesArray = {
//     chat1:[
//     {
//       text: 'Good morning',
//       author: Authors.human,
//       id: 'mes1'
//     },
//     {
//       text: 'Could u pls to help me',
//       author: Authors.human
//     },{
//       text: 'Sure',
//       author: Authors.bot,
//       id: 'mes2'

//     },
//    ],
//    chat2:[
//     {
//       text: 'Good morning',
//       author: Authors.human,
//       id: 'mes3'

//     }
//    ],
//    chat3:[
//     {
//       text: 'Good morning',
//       author: Authors.human,
//       id: 'mes4'

//     },
//     {
//       text: 'Hey, how can I help u',
//       author: Authors.bot,
//       id: 'mes5'

//     },
//    ],
  
  }
  // const chatsArray = [
  //   {
  //     name: 'Chat 1',
  //     id: 'chat1'
  //   },
  //   {
  //     name: 'Chat 2',
  //     id: 'chat2'
  //   },
  //   {
  //     name: 'Chat 3',
  //     id: 'chat3'
  //   },
  // ]


export const App = () => {
    // const [chatList, setChatList] = useState(chatsArray)
    const chatList = useSelector(state => state.chats)
    const dispatch = useDispatch()
    const [messages, setMessages] = useState(mesArray)

    const handleAddChat = useCallback((name) => {
      const newId = `chat${Date.now()}`;
  
      // setChatList(prevChatList => [...prevChatList, { name, id: newId }]);
      dispatch(addChat({ name, id: newId }))
      setMessages(prevMessages => ({
        ...prevMessages,
        [newId]: [],
      }));
    }, [dispatch]);

    const handleDeleteChat = useCallback((idToDelete) => {
      // setChatList(prevChatList =>
      //   prevChatList.filter(({ id }) => id !== idToDelete)
      // );
      dispatch(deleteChat(idToDelete))
      setMessages(prevMessages => {
        const newMessages = { ...prevMessages };
        delete newMessages[idToDelete];
  
        return newMessages;
      });
    }, []);
  
    
    const[color, setColor]= useState('lightblue')
    
    const toggleColor = useCallback(() => {
        setColor(prevColor => prevColor === 'lightblue' ? 'lightgreen' : 'orange')
    },[])


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
}

export default App
 



