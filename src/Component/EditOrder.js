import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import {connect} from 'react-redux'
import {editOrder} from "../actions/orderAction"


function EditOrder(props) {

    const [fname, setFname] = useState(props.order.fname);
    const [lname, setLname] = useState(props.order.lname);
    const [email, setEmail] = useState(props.order.email);
    const [country, setCountry] = useState(props.order.country);
    const [size, setSize] = useState(props.order.size);
    const [category, setCategory] = useState(props.order.category);
  
    const handleFnameChange = (e) => {
      setFname(e.target.value);
    };
  
    const handleLnameChange = (e) => {
      setLname(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleCountryChange = (e) => {
      setCountry(e.target.value);
    };
  
    const handleSizeChange = (e) => {
      setSize(e.target.value);
    };

    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    };


  
    function handleSubmit() {
      let editedOrder = {
        fname: fname,
        lname: lname,
        email: email,
        country: country,
        size: size,
        category: category,
        id: props.order.id,
      };
  
      props.editOrder(props.order.id, editedOrder);
      props.toggleModal();
    }

    return (
        <div>
              <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" name="fname" value={fname} onChange={(e) => handleFnameChange(e)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name"  name="lname" value={lname} onChange={(e) => handleLnameChange(e)} />
          </Form.Group>


          </Row>
          

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email"  name="email" value={email} onChange={(e) => handleEmailChange(e)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Country</Form.Label>
              <Form.Select defaultValue="Ghana" value={country} onChange={(e) => handleCountryChange(e)} >
                <option>Ghana</option>
                <option>China</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>Spain</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Size</Form.Label>
              <Form.Control type="text" placeholder="Please type Size in Feet"  name="size" value={size} onChange={(e) => handleSizeChange(e)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Category</Form.Label>
              <Form.Select defaultValue="Banners" value={category} onChange={(e) => handleCategoryChange(e)} >
                <option>Banners</option>
                <option>Stickers</option>
                <option>Invitation Cards</option>
                <option>Wedding Cards</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button  onClick={() => handleSubmit()}>
            Order Now
          </Button>
        </Form>
      </Container>
   </div>
    )
}

const mapDispatch = {
    editOrder
}

export default connect(null, mapDispatch) (EditOrder)
