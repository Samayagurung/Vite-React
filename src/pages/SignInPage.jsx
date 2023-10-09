import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function SignInPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: "",
      password: "",
    };

    axios
      .post("https://backend-mu-pied.vercel.app/users/login", data)
      .then((res) => {
        console.log(res);
        if(res.response.data.status === "true"){
          // Navigate this part
          navigate("/card")

          toast.success(res.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message),
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          };
      });
  };

  return (
    <>
      <div className="container1">
        <Card className="header">
        <h2 className="text-info">Sign In</h2>
        </Card>
      
        <Card className="form" >
          <Form style={{padding:"10px"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="info" type="submit" className="text-light" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default SignInPage;
