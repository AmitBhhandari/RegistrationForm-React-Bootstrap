import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Counter from "./Components/Counters";
import "./App.css";
import Register from "./Components/RegistrationForm";

let App = () => {
  return (
    <div>
      <Navbar bg="dark" expanded="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
        </Container>
        
      </Navbar>
    {/* <Counter />*/}
      <Register/>
    </div>
  );
};

export default App;
