import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardX() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then(({ data }) => {
      setProduct(data.products);
    });
  }, []);

  const handleDelete = (deletepost) => {
    // console.log(deletepost)
    const filteredProd = product.filter((post) =>
     post !== deletepost);

    setProduct(filteredProd);
  };

  return (
    <>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {product.map((post, id) => {
          const { title, description, thumbnail } = post;
          return (
            <div className="" style={{ height: "400px" }} key={id}>
              <Card style={{ width: "23rem", height: "100%" }}>
                <Card.Img
                  variant="top"
                  src={thumbnail}
                  style={{ height: "50%" }}
                />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    {description.length > 25
                      ? description.slice(0, 24) + "..."
                      : description}
                  </Card.Text>
                  <Button variant="primary">View</Button>
                  <Button variant="warning">Edit</Button>
                  <Button variant="danger" onClick={() => handleDelete(post)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardX;
