import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { errorToast, successToast } from "../services/toast.service";




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    e.preventDefault();

    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const resp = await axios.post(
        "https://backend-mu-pied.vercel.app/users/login",
        data
      );
        if(resp.data.status){
          // console.log(resp.data.message)
          successToast(resp.data.message)

        }
      
    } catch (error) {
      // console.log(error.response.data.message)
      errorToast(error.response.data.message)
    }
  };
  return (
    <>
      <div className="container1">
        <Card className="form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={handleInput}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleInput}
              />
            </Form.Group>
            <Button variant="secondary" type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default Login;
