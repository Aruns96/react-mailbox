import React from "react";
import { Container, Row, Col,Button} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authActions } from "../store/Auth";
import { useHistory } from "react-router-dom";




const Welcome = () => {
  const history = useHistory()
  const dispatch = useDispatch()
   const user = localStorage.getItem("email");
   const logOutHandler =()=>{
       dispatch(authActions.logOut())
       history.replace("/login")
   }
  return (
    <Container fluid>
      <Row className="header-row">
        <Col xs={11}>
          <h1>Welcome to MailBox-{user}</h1>
        </Col>
        <Col xs={1}>
          <Button onClick={logOutHandler} variant="danger" className="mr-0">logout</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;