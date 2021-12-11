import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {connect} from 'react-redux'
import {editOrder} from "../actions/orderAction"


function EditOrder(props) {

    const [title, setTitle] = useState(props.order.title);
    const [date, setDate] = useState(props.order.date);
    const [textarea, setTextArea] = useState(props.order.textarea);
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
  
    const handleTextAreaChange = (e) => {
      setTextArea(e.target.value);
    };
  
    function handleSubmit() {
  
      let editedOrder = {
        title: title,
        date: date,
        textarea: textarea,
        id: props.order.id,
      };
  
      props.editOrder(props.order.id, editedOrder);
      props.toggleModal();
    }

    return (
        <div>
        <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Title</Form.Label>
         <Form.Control
           type="text"
           placeholder="Title"
           value={title}
           onChange={(e) => handleTitleChange(e)}
         />
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Date</Form.Label>
         <Form.Control
           name="date"
           placeholder="Enter Date"
           value={date}
           onChange={(e) => handleDateChange(e)}
         />
         </Form.Group>
 
     <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Text Area</Form.Label>
         <Form.Control
           name="text"
           placeholder="Text Area"
           value={textarea}
           onChange={(e) => handleTextAreaChange(e)}
         />
 
         <Button onClick={() => handleSubmit()}>Save</Button>
       </Form.Group>
     </Form>
   </div>
    )
}

const mapDispatch = {
    editOrder
}

export default connect(null, mapDispatch) (EditOrder)
