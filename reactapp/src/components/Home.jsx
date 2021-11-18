import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { ThemeContex } from "../utils/themeContext";



export const Home = () => {
    const {color, toggleColor } = useContext(ThemeContex)
    return (
    <Container className="mt-4">
    <h2 className="text">Welcome home, sweetie.</h2>
    <Button style={{backgroundColor: color, borderColor: color}} onClick={toggleColor} className="mt-4">Change color</Button> 
    </Container>
    )    
}