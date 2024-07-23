import React from 'react'
import Banner from "../components/Banner"
import Welcome from '../components/Welcome'
import SideBar from '../components/SideBar'
import { Container, Row, Col } from 'react-bootstrap';
import InBoxMsg from '../components/InBoxMsg';
const InboxMessage = () => {
  return (
    <>
    <Banner />
    <Welcome />
    
   
  
   <Container fluid>
      <Row>
        <Col >
        <SideBar />
       
        </Col>
        <Col  xs={10}>
         <InBoxMsg />
      
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default InboxMessage