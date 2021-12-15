import React, { useState} from 'react'
import {v4 as uuid} from "uuid"
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import {connect} from 'react-redux'
import {addOrder} from '../actions/orderAction'

function OrderForm(props) {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [size, setSize] = useState("");
    const [category, setCategory] = useState("");

    function handleSubmit(e) {

      e.preventDefault();
      
      if(fname && lname && email) {
        let newOrder = {
          fname: fname,
          lname: lname,
          email: email,
          country: country,
          size: size,
          category: category,
          id: uuid()
        };
       
      //console.log(newOrder);
      props.addOrder(newOrder);
  
        setFname("");
        setLname("");
        setEmail("");
        setCountry("");
        setSize("");
        setCountry("");
      }
  
    }
    return (
        <div>
              <Container>
        <Form onSubmit={(e)=>handleSubmit(e)} style={{marginTop: "5rem", marginBottom: "5rem"}}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" required="required" placeholder="First Name" name="fname" value={fname} onChange={(e)=> setFname(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" required="required" placeholder="Last Name"  name="lname" value={lname} onChange={(e)=> setLname(e.target.value)} />
          </Form.Group>


          </Row>
          

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required="required" placeholder="Email"  name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Country</Form.Label>
              <Form.Select defaultValue="Ghana"  required="required" value={country} onChange={(e)=> setCountry(e.target.value)} >
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
              <Form.Control type="text" required="required" placeholder="Please type Size in Feet"  name="size" value={size} onChange={(e)=> setSize(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Category</Form.Label>
              <Form.Select defaultValue="Banners" required="required" value={category} onChange={(e)=> setCategory(e.target.value)} >
                <option>Banners</option>
                <option>Stickers</option>
                <option>Invitation Cards</option>
                <option>Wedding Cards</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Order Now
          </Button>
         
        </Form>
      </Container>
        </div>
    )
}

const mapDispatch = {
  addOrder
}

export default connect(null, mapDispatch) (OrderForm)
