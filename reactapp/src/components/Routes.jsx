import { Route, Routes } from "react-router";
import '../App.css'
import { BrowserRouter, Link} from "react-router-dom"
import Chats from "../components/Chats";
import { Home } from "../components/Home";
import { User } from "../components/User";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import { ChatList } from "../components/ChatList";


export const Router = () => (
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
          <Route path=":chatId"  element={ <Chats /> } />
        </Route>
        <Route path='/user'element={<User />} />
        <Route path='*' element={<h2>Sorry!We'r haven't this page</h2>}/>
      </Routes>
    </Container>
  </BrowserRouter>
)
