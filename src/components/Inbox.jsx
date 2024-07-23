import React,{useState,useEffect} from 'react'
import { ListGroup,Row,Col,Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Inbox = () => {
    const [inbox,setInBox] =useState([]);
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
            to:data[key].to
          });
        }
        console.log(arr)
        setInBox(arr)
    }
    useEffect(()=>{
    getMail()
    },[])

  return (
    <>
    <Link to="/compose"><Button  variant="outline-primary">Compose</Button></Link>
    <Card className="w-75 mb-auto mt-5" style={{backgroundColor:'rgb(33,37,41)',color:'white'}}>
        <Card.Body>
          <ListGroup variant="dark"  >
            <ListGroup.Item style={{backgroundColor:'rgb(33,37,41)',color:'white'}}>
              <Row >
                <Col>User</Col>
                <Col >Subject</Col>
                <Col className="col-8">Email</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>

          {inbox.length>0&&inbox.map((i) => {return (
            <ListGroup.Item className="m-3">
              <Row key={i.id}>
                <Col>{i.from}</Col>
                <Col>{i.subject}</Col>
                <Col  className="col-8">{i.message}</Col>
              </Row>
            </ListGroup.Item>
          )})}
        </Card.Body>
      </Card>
      </>
  )
}

export default Inbox