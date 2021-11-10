import React from "react";
import Card from 'react-bootstrap/Card'
import Button from "@restart/ui/esm/Button";


export const User = () => {
    return (
        <Card style={{ width: '18rem' }} className="mt-5">
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
    )    
}