import React, { useState} from 'react'
import {v4 as uuid} from "uuid"
import { Container, Form, Button } from "react-bootstrap";
import {connect} from 'react-redux'
import {addOrder} from '../actions/orderAction'

function OrderForm(props) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [textarea, setTextArea] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      
      if(title && date && textarea) {
        let newOrder = {
          title: title,
          date: date,
          textarea: textarea,
          id: uuid()
          
        };

      //console.log(newOrder);
      props.addOrder(newOrder);
  
        setTitle("");
        setDate("");
        setTextArea("");
      }
  
    }
    return (
        <div>
               <Container>
          <div className="box">
            <Form onSubmit={(e)=>handleSubmit(e)}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" placeholder="Title" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Date:</Form.Label>
                <Form.Control type="date" placeholder="Date" name="date" value={date} onChange={(e)=> setDate(e.target.value)} /><br />

                <Form.Label>Note Text</Form.Label>
                <Form.Control as="textarea" rows={3} name="textarea"  value={textarea} onChange={(e)=> setTextArea(e.target.value)}/>
              </Form.Group>
              <Button type="submit">Add Note</Button>
            </Form>
          </div>
        </Container>
        </div>
    )
}

const mapDispatch = {
  addOrder
}

export default connect(null, mapDispatch) (OrderForm)
