import React, { useState } from "react";
import Container from "react-bootstrap/Container";
// import { SignForm } from "./SignForm";
import { Link } from "react-router-dom"
import { logIn } from "../services/firebase";
import Button from "react-bootstrap/Button";




export const Home = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (email, pass) => {
        setLoading(true);
        try {
          await logIn(email, pass);
        } catch (err) {
          console.log(err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

return (
  <Container className="mt-4">
    <h2 className="text">Welcome home, sweetie.</h2>
    {/* <SignForm  onSubmit={handleSignIn} error={error} loading={loading}/> */}
    <Button variant="outline-warning"size="sm"><Link className="text-sign" to='/signup'>Sign up</Link></Button>
  </Container>
    )    
}