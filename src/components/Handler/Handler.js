import React from "react";
import Signup from "../Signup/Signup";
import { Container } from "react-bootstrap";
const Handler = () => {
 
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="2-100" style={{ maxWidth: "400px" }}>
        <Signup />
      </div>
    </Container>
  );
};

export default Handler;


