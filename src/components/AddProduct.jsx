import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

const AddProduct = ({showX, handleCloseX, addProductX, handleChangeX}) => {
  return (
    <>
    <Modal show={showX} onHide={handleCloseX} >
    <Form className='p-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Control name="image" placeholder="Image Link" onChange={handleChangeX} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control  type="text" name="title" placeholder="Product Title" onChange={handleChangeX} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control as="textarea" type="text" name="description" placeholder="Product Description" onChange={handleChangeX} />
      </Form.Group>
      
      <Button variant="secondary" type="submit" className='me-2' onClick={handleCloseX}>
        Close
      </Button>
      <Button variant="success" type="submit" onClick={addProductX}>
        Save Changes
      </Button>
    </Form>
         </Modal>
    </>
  )
}

export default AddProduct