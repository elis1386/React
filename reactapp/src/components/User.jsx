import React from "react";
import Card from 'react-bootstrap/Card'
import Button from "@restart/ui/esm/Button";
import Container from "react-bootstrap/esm/Container";


export const User = () => {
    return (
    <Container className="mt-4">
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>User Profile</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button className="user-btn" variant="primary">Edit</Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card> 
    </Container> 
    )    
}