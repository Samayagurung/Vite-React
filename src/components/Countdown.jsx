import React, { useEffect, useState } from "react";
import { CardBody, CardHeader, CardTitle, Image } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Countdown() {
  const [count, setCount] = useState(7777777);

  useEffect(() => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  });

  return (
    <>
      <div className="container ">
        <div className="">
          <Image className="logo" src="public/Countdown.png"></Image>

        </div>
        <Card bg="dark" text="light" className="card">
          <CardBody>
            <CardTitle className="text-center">: {count}</CardTitle>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Countdown;
