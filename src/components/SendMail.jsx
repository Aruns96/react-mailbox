import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const SendMail = () => {
    const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [editorState,setEditorState] =useState(EditorState.createEmpty());

  let url = "https://react-http-b0681-default-rtdb.firebaseio.com"
  const sender = localStorage.getItem("email").replace(/['@','.']/g,'')
  const dataSendMail = async()=>{
    try{
           const response = await fetch(`${url}/send/${sender}.json`,{
            method:'POST',
            body:JSON.stringify({
                from:sender,
                to:to,
                subject:subject,
                message:editorState.getCurrentContent().getPlainText()
            }),
            headers: {
                "Content-Type": "application/json",
              },
           })
    }
    catch(error){
        alert(error)
    }
  }  
  const dataInBoxMail = async()=>{
    const receiver = to.replace(/['@','.']/g,'')
    try{
           const response = await fetch(`${url}/inbox/${receiver}.json`,{
            method:'POST',
            body:JSON.stringify({
                from:sender,
                to:to,
                subject:subject,
                message:editorState.getCurrentContent().getPlainText()
            }),
            headers: {
                "Content-Type": "application/json",
              },
           })
    }
    catch(error){
        alert(error)
    }
  }  


  const handleSubmit = (e) => {
    e.preventDefault();
    dataSendMail()
    dataInBoxMail()
    setTo("")
    setSubject("")
    setEditorState("")
   
    
  };

  
  return (
    <Container className="mt-5">
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control 
          type="email" 
          placeholder="To" 
          value={to} 
          onChange={(e) => setTo(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control 
          type="text" 
          placeholder="Subject" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
      <Editor 
         editorState={editorState}
         onEditorStateChange={(e)=>setEditorState(e)}/>
      </Form.Group>
      <Row>
        <Col>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Col>
       
      </Row>
    </Form>
  </Container>
  )
}

export default SendMail