import React from 'react'
import { CardFooter } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProductList=({prodX,id,del,view})=> {
  // console.log(prod)
  return (
    <>
    <div className="" style={{width:'20rem'}}  key={id}>
      <Card className="form" style={{ width: '20rem' ,height:"400px" }}>
      <Card.Img variant="top" src={prodX.thumbnail} className='h-50' />
      <Card.Body>
        <Card.Title>{prodX.title.length>13? prodX.title.slice(0,12)+"...": prodX.title}</Card.Title>
        <Card.Text>
        {prodX.description.length>40? prodX.description.slice(0,39)+"...": prodX.description}
        </Card.Text>
        <CardFooter className='text-center'>
        <Button variant="primary" className='me-1'  onClick={(e)=>view(e)} >View</Button>
        <Button variant="success" className='me-1' >Edit</Button>
        <Button variant="danger" className='me-1' onClick={(e)=>del(e,prodX.id)} >Delete</Button>
        </CardFooter>

      </Card.Body>
    </Card>
    </div>
    
    </>
    

  )
}

export default ProductList;