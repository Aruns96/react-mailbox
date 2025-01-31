import React from 'react'
import Banner from "../components/Banner"
import Welcome from '../components/Welcome'

import Inbox from '../components/Inbox'
import SideBar from '../components/SideBar'
import { Container, Row, Col } from 'react-bootstrap';

const WelcomePage = () => {
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
        <Inbox />
      
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default WelcomePage