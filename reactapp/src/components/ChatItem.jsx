import {  NavLink } from "react-router-dom"
import { useDispatch } from "react-redux";
import { deleteChat } from '../store/chats/actions';
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup'
import Container from "react-bootstrap/esm/Container";





export const ChatItem = ({ chat }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
      dispatch(deleteChat(chat.id));
    };
  



return(
    <Container className="d-flex f-row">
        <ListGroup className="items" as="ol" > 
          <NavLink className="mt-4" 
            style={({ isActive }) => ({ color: isActive ? 'pacific' : 'grey' })}
            to={`/chats/${chat.id}`}>{chat.name}
        </NavLink>
        </ListGroup>
        <Button className="mt-4 btn-delete" variant="outline-danger"size="sm" onClick={handleDeleteClick}>delete</Button>
    </Container>
)
}
