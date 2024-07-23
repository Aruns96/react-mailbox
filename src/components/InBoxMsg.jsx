import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
const InBoxMsg = () => {
    const {id}=useParams();
     const data = useSelector(state=>state.email.inboxData)
     const msg = data.filter(i=>i.id===id)
     let url = "https://react-http-b0681-default-rtdb.firebaseio.com"

  const user = localStorage.getItem('email').replace(/['@','.']/g, "");

  const putData = async ()=>{
    try {
        const response = await fetch(`${url}/inbox/${user}/${id}.json`,{
          method:'PATCH',
          body:JSON.stringify({
            read:true
          }),
          headers:{
            'Content-Type':'application/json'
          }
        })

        //console.log(response)
    } catch (error) {
      alert(error)
    }
  }
useEffect(()=>{
  putData()
},[])
  return (
    <Card className="text-center">
      <Card.Header>From:{msg[0].from}</Card.Header>
      <Card.Body>
       
        <Card.Text>
          Message:{msg[0].message}
        </Card.Text>
       
      </Card.Body>
     
    </Card>
  )
}

export default InBoxMsg