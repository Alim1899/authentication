import classes from "./Signup.module.css";
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { Form, Button, Card } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useRef } from "react";
const Signup = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDM_ceooX__qbBH1Mi6__m934tPMrqYwVc",
    authDomain: "authentication-3f929.firebaseapp.com",
    projectId: "authentication-3f929",
    storageBucket: "authentication-3f929.appspot.com",
    messagingSenderId: "459126881824",
    appId: "1:459126881824:web:8e8c7d6bec8fc21038c645",
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const signHandler =(e)=>{
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    // ..
  });
  }


  return (
    <div className={classes.main}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sing Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef}></Form.Control>
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                ref={passwordRef}
              ></Form.Control>
            </Form.Group>

            <Form.Group id="passwordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="passwordConfirm"
                required
                ref={passwordConfirmRef}
              ></Form.Control>
            </Form.Group>
            <Button onClick={signHandler} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <a href="/login">Log In</a>
      </div>
    </div>
  );
};

export default Signup;
