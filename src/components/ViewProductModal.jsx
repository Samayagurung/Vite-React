
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

const ViewProductModal = ({showZ,prodX}) => {
 
  return (
    <Modal show={showZ}  >
    <Form className='p-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Control name="image" placeholder="Image Link" value={prodX.thumbnail} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control  type="text" name="title" placeholder="Product Title" value={prodX.title}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control as="textarea" type="text" name="description" placeholder="Product Description"  />
      </Form.Group>
      
      <Button variant="secondary" type="submit" className='me-2' >
        Close
      </Button>

    </Form>
         </Modal>
  )
}

export default ViewProductModal