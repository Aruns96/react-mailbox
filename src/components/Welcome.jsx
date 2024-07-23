import React from "react";
import { Container, Row, Col} from "react-bootstrap";



const Welcome = () => {
   const user = localStorage.getItem("email")
  return (
    <Container fluid>
      <Row className="header-row">
        <Col xs="auto">
          <h1>Welcome to MailBox-{user}</h1>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Welcome;