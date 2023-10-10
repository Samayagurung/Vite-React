import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";
import { Button } from "react-bootstrap";
import AddProduct from "../components/AddProduct";
import ViewProductModal from "../components/ViewProductModal";

const Products = () => {

  const URL = import.meta.env.VITE_BACKEND_URL;

 
  

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const[imageLink,setImageLink]=useState("")
  const[productTitle,setProductTitle]=useState("")
  const[productDescription,setProductDescription]=useState("")

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(URL + "products");
        // console.log(data)
        const getProducts = data.products;
        // console.log(getProducts)
        setProduct(getProducts);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const deleteHandler = (e, id) => {
    e.preventDefault();
    const filteredProducts = product.filter((item) => {
      return item.id !== id;
    });
    setProduct(filteredProducts);
  };
  const showProduct = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleClose =(e)=>{
    e.preventDefault();
    setShow(false);
  }

  const addProduct=(e)=>{
    e.preventDefault();
    const newProduct ={ id: Date.now(),thumbnail:imageLink , title: productTitle, description: productDescription}
    // console.log(newProduct)
    setProduct([newProduct,...product])
    
  }
  const handleChange=(e)=>{
    e.preventDefault();
    if(e.target.name === "image"){
      setImageLink(e.target.value)
    }else if(e.target.name === "title"){
      setProductTitle(e.target.value)
    }else if( e.target.name === "description"){
      setProductDescription(e.target.value)
    }
    console.log("imageLink",imageLink,"productDescription", productDescription,"productTitle", productTitle)
  }
  const viewHandler=(e)=>{
    e.preventDefault();
 
    
  }


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <Button onClick={showProduct}>Add Product</Button>
        <div className="container-fluid d-flex flex-wrap justify-content-center gap-4">
          {product.map((prod) => {
            return (
              <ProductList prodX={prod} del={deleteHandler} view={viewHandler} />
            )
            ;
          })}
        </div>
        <AddProduct showX={show} handleCloseX={handleClose} addProductX={addProduct} handleChangeX={handleChange} />
        {/* <ViewProductModal showZ={show} prodX={product}/> */}
        </>
        
      )}
    </>
  );
};

export default Products;
