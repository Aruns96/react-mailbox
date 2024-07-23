import React,{useState,useEffect} from 'react'
import { ListGroup,Row,Col,Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsBullseye } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { EmailActions } from '../store/Email';

const Inbox = () => {
  const dispatch = useDispatch()
    const [inbox,setInBox] =useState([]);
    const inboxMsg = useSelector(state=>state.email.inboxData)
   // console.log("inboxmsg",inboxMsg)
    let url = "https://react-http-b0681-default-rtdb.firebaseio.com"
    const user = localStorage.getItem("email").replace(/['@','.']/g,'')
    const getMail = async()=>{
         const response =  await fetch(`${url}/inbox/${user}.json`)
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
        //console.log(arr)
         dispatch(EmailActions.changeInbox(arr))
        
        setInBox(arr)
    }
    useEffect(()=>{
    getMail()
    },[])

  return (
    <>
    
    <Card className="w-75 mb-auto " style={{backgroundColor:'rgb(33,37,41)',color:'white'}}>
        <Card.Body>
          <ListGroup variant="dark"  >
            <ListGroup.Item style={{backgroundColor:'rgb(33,37,41)',color:'white'}}>
              <Row >
                <Col></Col>
                <Col>User</Col>
                <Col >Subject</Col>
                <Col>Message</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>

          {inboxMsg.length>0&&inboxMsg.map((i) => {return (
            <ListGroup.Item className="m-3"  key={i.id}>
              <Row key={i.id}>
                <Col>{!i.read&&<BsBullseye />}</Col>
                <Col>{i.from}</Col>
                <Col>{i.subject}</Col>
                <Col> <Link to={`/inbox/${i.id}`}>View Message </Link></Col>
              </Row>
            </ListGroup.Item>
          )})}
        </Card.Body>
      </Card>
      </>
     
  )
}

export default Inbox