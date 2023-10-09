import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardFooter from "react-bootstrap/esm/CardFooter";
import CardHeader from "react-bootstrap/esm/CardHeader";

const Counter = () => {
  let [count, setCount] = useState(0);

  // useEffect(()=>{
  //   console.log('first page render') 
  // },[]) // Only shows in first page render i.e loading page first time.



  const increment = (data) => {
    event.preventDefault();
    setCount(count + 1);
  };
  const decrement = (data) => {
    event.preventDefault();
    setCount(count - 1);
  };
  const reset =(data)=>{
    event.preventDefault();
    setCount(0)
  }
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <CardHeader><strong>Counter</strong></CardHeader>
        <Card.Body>
          <Card.Title>{count}</Card.Title>
        </Card.Body>
        <CardFooter>
          <Button variant="primary" onClick={increment}>
            Increment
          </Button>
          <Button variant="dark" onClick={decrement}>
            Decrement
          </Button>
          <Button variant="danger" onClick={reset}>
            Reset
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Counter;
