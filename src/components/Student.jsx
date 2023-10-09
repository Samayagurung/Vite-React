import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import CardHeader from "react-bootstrap/esm/CardHeader";

const QuoteDisplay = () => {
  const [id, setId] = useState(1);
  const [author, setAuthor] = useState();
  const [quote, setQuote] = useState();

  const toggleQuotes = async (e) => {
    event.preventDefault();

    const response = await axios.get("https://dummyjson.com/quotes");
    console.log(response)
    const { quotes } = response.data;

    const qts = quotes.find((item) => item.id === id);
    console.log(qts);

if(id>quotes.length){
  setId(1);
}else{
  setAuthor(qts.author);
  setQuote(qts.quote);
  setId(id + 1);
}


  };
  return (
    <>
      <Card style={{ width: "28rem" }}>
        <CardHeader>
          <h2>Quote Display</h2>
        </CardHeader>
        <Card.Body>
          <h5 >Author: </h5>
          <h4 className="text-primary">{author}</h4>
          <p><i>{quote}</i></p>

          <Button variant="success" onClick={toggleQuotes}>
            Toggle
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default QuoteDisplay;
