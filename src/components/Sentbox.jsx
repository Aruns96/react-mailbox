import React,{useState,useEffect} from 'react'
import { ListGroup,Row,Col,Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsBullseye } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { EmailActions } from '../store/Email';

const Sentbox = () => {
    const dispatch = useDispatch()
    
    const sendBoxMsg = useSelector(state=>state.email.sendboxData)
   
    let url = "https://react-http-b0681-default-rtdb.firebaseio.com"
    const user = localStorage.getItem("email").replace(/['@','.']/g,'')
    const getMail = async()=>{
         const response =  await fetch(`${url}/send/${user}.json`)
         const data = await response.json()
        
         let arr = [];
        for (let key in data) {
          arr.push({
            id: key,
            from: data[key].from,
            message: data[key].message,
            subject: data[key].subject,
            to:data[key].to,
            read:data[key].read
          });
        }
        
         dispatch(EmailActions.changeSendbox(arr))
        
        
    }
    useEffect(()=>{
    getMail()
   
    },[])
   

  return (
    <Card className="w-75 mb-auto " style={{backgroundColor:'rgb(33,37,41)',color:'white'}}>
        <Card.Body>
          <ListGroup variant="dark"  >
            <ListGroup.Item style={{backgroundColor:'rgb(33,37,41)',color:'white'}}>
              <Row >
               
                <Col>To</Col>
                <Col >Subject</Col>
                <Col>Message</Col>
                
              </Row>
            </ListGroup.Item>
          </ListGroup>

          {sendBoxMsg.length>0&&sendBoxMsg.map((i) => {return (
            <ListGroup.Item className="m-3"  key={i.id}>
              <Row key={i.id}>
                
                <Col>{i.to}</Col>
                <Col>{i.subject}</Col>
                <Col> <Link to={`/sendmsgs/${i.id}`}>View Message </Link></Col>
                
              </Row>
            </ListGroup.Item>
          )})}
        </Card.Body>
      </Card>
  )
}

export default Sentbox