import React from 'react'
import Banner from "../components/Banner"
import Welcome from '../components/Welcome'

import Sentbox from '../components/Sentbox'
import SideBar from '../components/SideBar'
import { Container, Row, Col } from 'react-bootstrap';

const SentBox = () => {
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
        <Sentbox />
      
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default SentBox