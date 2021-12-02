import { Route, Routes } from "react-router";
import '../App.css'
import { BrowserRouter, Link} from "react-router-dom"
import Chats from "../components/Chats";
import { Home } from "../components/Home";
import { User } from "../components/User";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import { ChatList } from "../components/ChatList";
import { Articles } from "./Articles";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { SignUp } from "./SignUp";
import { useEffect } from "react";
import { auth } from "../services/firebase";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "../store/user/actions";


export const Router = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        dispatch(signIn())
      }else {
        dispatch(signOut())
      }
    })
  },[])
  return (
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
        <Button variant="outline-info"size="sm">
          <Link className="text" to='/articles'>Articles</Link>
        </Button>
      </ul>
      <Routes>

        <Route path='/' element={ <PublicRoute> <Home /> </PublicRoute> }/>
        <Route path='/signup' element={ <PublicRoute> <SignUp /> </PublicRoute> }/>

        <Route path='articles' element={<Articles />} />

        <Route path='chats'>
          <Route index element={ <PrivateRoute> <ChatList /> </PrivateRoute>} />
          <Route path=":chatId"  element={ <PrivateRoute> <Chats /> </PrivateRoute>} />
        </Route>

        <Route path='/user'element={ <PrivateRoute> <User /> </PrivateRoute> }/>
        <Route path='*' element={<h2>Sorry!We'r haven't this page</h2>}/>

      </Routes>
    </Container>
  </BrowserRouter>
)
}
