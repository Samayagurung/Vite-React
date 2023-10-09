import axios from "axios";
import React, { useState } from "react";
import {
  Card,
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { successToast } from "../services/toast.service";


const Register = () => {
  const [inputData, setInputData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const nav = useNavigate();

  const handleInput = (e) => {
    e.preventDefault();
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://backend-mu-pied.vercel.app/users/register",
        inputData
      );
      // console.log(res.data.message)
      if(res.data.status){
        nav("/login")
        successToast(res.data.message)
      }

      
    } catch (error) {
     console.log(error.response.data.message)
    }
  };

  return (
    <>
      <div className="container1">
        <Card className="form">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                onChange={handleInput}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email address"
                onChange={handleInput}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleInput}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Enter your password again"
                onChange={handleInput}
              ></Form.Control>
            </Form.Group>
            <Button variant="info" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Register;
