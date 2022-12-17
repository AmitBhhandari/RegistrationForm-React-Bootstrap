import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Register = () => {
  const [state, setState] = useState({
    user: {
      username: "",
      email: "",
      password: "",
    },
  });

  const updateInput = (e) => {
    setState({
      ...state,
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  const register=(e)=>{
    e.preventDefault()
    console.log(state.user)
  }

  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col md={3}>
            <Card className="shadow-lg">
              <Card.Header style={{ backgroundColor: "#ffc107" }}>
                <h4>Register</h4>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="username"
                      onChange={updateInput}
                      type="userName"
                      placeholder="Enter username"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="email"
                      onChange={updateInput}
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="password"
                      onChange={updateInput}
                      type="password"
                      placeholder="Enter password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Button variant="warning" type="submit" onClick={register}>
                      Register
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
