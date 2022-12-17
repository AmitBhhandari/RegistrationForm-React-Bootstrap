import React, { useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const Counter = () => {

  const[state,setState]=useState({
    count:0
  })

  const incre=()=>{
    setState({
      count:state.count+1
    })
  }

  const decre=()=>{
    setState({
      count:state.count-1
    })
  }


  return (
    <div>
      <Container className="mt-3 ">
        <Row>
          <Col xs={4}>
            <Card>
                <Card.Body className="shadow"><p className="display-2">{state.count}</p>
                <Button variant="primary" className="m-1" onClick={incre}>Increment</Button>
                <Button variant="warning" onClick={decre}>Warning</Button>
                </Card.Body>
               
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default Counter;
