import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { EmailActions } from '../store/Email';
const SideBar = () => {
  const dispatch = useDispatch();

  const unread = useSelector((state) => state.email.unread);
  console.log(unread)
  return (
    
    <Nav className="flex-column  h-100vh">
      <Link to="/compose"><Button  variant="outline-primary">Compose</Button></Link>
      
      <NavLink to="/welcome">
        Inbox <span className="badge bg-primary float-end">{unread}</span>
      </NavLink>
     
     
      
    </Nav>
   
  )
}

export default SideBar