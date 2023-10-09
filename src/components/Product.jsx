import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Image,
  Modal,
} from "react-bootstrap";
import axios from "axios";

function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    const { products } = data;
    //  console.log(products)

    setData(products);
  };

 const handleDelete=(e,id)=>{
  e.preventDefault();
  const filteredProd= data.filter((del)=>{
    return del.id !== id;
  })
  setData(filteredProd)

 }
 

  return (
    <>
      <div className="container-fluid d-flex flex-wrap justify-content-center gap-5">
        {data.map((prod, id) => {
          const { thumbnail, title, description } = prod;
          return (
            <Card key={id} style={{ width: "18rem", height: "400px" }}>
              <Image src={thumbnail} className="h-50"></Image>
              <CardBody>
                <CardTitle>
                  {title.length > 15 ? title.slice(0, 14) + "..." : title}
                </CardTitle>
                <CardText>
                  {description.length > 40
                    ? description.slice(0, 39) + "..."
                    : description}
                </CardText>
              </CardBody>
              <CardFooter className="text-center ">
                <Button variant="primary" className="me-2">
                  View
                </Button>
                <Button variant="success" className="me-2">
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="me-2"
                  onClick={(e)=>handleDelete(e,prod.id)}
                >
                  Delete
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Product;
