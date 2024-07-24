import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const SentboxMsg = () => {
    const {id}=useParams();
     const data = useSelector(state=>state.email.sendboxData)
     const msg = data.filter(i=>i.id===id)
    console.log(msg)
  return (
    <Card className="text-center">
      <Card.Header>To:{msg[0].to}</Card.Header>
      <Card.Body>
       
        <Card.Text>
          Message:{msg[0].message}
        </Card.Text>
       
      </Card.Body>
     
    </Card>
  )
}

export default SentboxMsg