import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { successToast, errorToast } from "../services/toast.service";

function SignUpPage() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post(
        "https://backend-mu-pied.vercel.app/users/register",
        data
      );

      if (resp.data.status) {
        nav("/signin");
        successToast(resp.data.message);
      }
    } catch (error) {
      errorToast(resp.data.message);
    }
  };
  return (
    <>
      <div className="container1">
        <Card className="header">
          <h2 className="text-info">Sign up</h2>
        </Card>

        <Card className="form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="fullname"
                type="text"
                placeholder="Enter full name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
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

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              variant="info"
              className="text-light"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default SignUpPage;
