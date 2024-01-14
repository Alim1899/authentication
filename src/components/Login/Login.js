import classes from "./Login.module.css";
import { Form, Button, Card } from "react-bootstrap";
import firebase from 'firebase/compat/app'
import 'firebase/auth'
import { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = firebase.auth();
  const emailRef = useRef();
  const passwordRef = useRef();
signInWithEmailAndPassword(auth, emailRef, passwordRef)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });

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

            <Button className="w-100" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
