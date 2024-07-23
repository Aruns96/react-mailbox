import { useRef } from "react";

import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { authActions } from "../store/Auth";


const Login = () => {
   // const dispatch = useDispatch()
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;



    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_WEB_API}`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "some error occured..";
            if (data && data.error && data.error.errors[0].message) {
              errorMessage = data.error.errors[0].message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // console.log("token",data)
        localStorage.setItem("token", data.idToken);
       // localStorage.setItem("userID", data.localId);
        localStorage.setItem("email", data.email);
        //localStorage.setItem("email",enteredEmail)
        alert("login success");
        history.replace("/welcome");
        //dispatch(authActions.setLogin(true));
        
      })
      .catch((e) => alert(e.message));

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <>
      <h1 className="text-center mb-4">Login</h1>
      <Container className="d-flex align-items-center justify-content-center flex-grow-1">
        <Form>
          <FloatingLabel label="Your Email" className="mb-3">
            <Form.Control type="email" id="email" ref={emailRef} required />
          </FloatingLabel>
          <FloatingLabel label="Your Password" className="mb-3">
            <Form.Control
              type="password"
              id="password"
              ref={passwordRef}
              required
            />
          </FloatingLabel>

          <div className="text-center">
            <Button
              className="d-block mx-auto"
              variant="primary"
              type="button"
              onClick={submitHandler}
            >
              Login
            </Button>
            <Link to="/signup">create new accout</Link>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Login;