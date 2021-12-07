import React, { useEffect } from "react"
import{useSelector, useDispatch,} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/esm/Container"
import { toggleCheckbox } from "../store/user/actions"
import { logOut } from "../services/firebase";

export const User = () => {
    const checkboxValue = useSelector(state => state.checkbox)
    const dispatch = useDispatch()

  

    const handleChange = () => {
       dispatch(toggleCheckbox)
    }
    
    const handleLogOutClick = async () => {
      try {
        await logOut();
      } catch (err) {
        console.log(err);
      }
   }

    return (
    <Container className="mt-4">
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>User Profile &nbsp;
          <input type="checkbox" checked={checkboxValue} onChange={handleChange}/>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button className="user-btn" variant="primary">Edit</Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card> 
    <Button variant="outline-warning" className="mt-4" onClick={handleLogOutClick}>Sign out</Button>
    </Container> 
    )    
}

// const mapStateToProps = (state) => ({
//   name: state.user.name,
//   checkboxValue: state.user.checkboxValue
// })
// const mapDispatchToProps = {}

// export const ConnectedUser = connect(mapStateToProps)(User)