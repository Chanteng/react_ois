import React, { useState } from "react";
import { Button, Modal, Container } from "react-bootstrap";
import EditOrder from "./EditOrder"
import {connect} from 'react-redux'
import {deleteOrder} from '../actions/orderAction'

function Note(props) {
  const order = props.order;

  //state to handle modal
 const [showModal, setShowModal] = useState(false);

  //function to toggle modal
function toggleModal() {

    setShowModal(!showModal);
  }

  //console.log(props);

  return (
    
    <div>
      <Container>
      <h1>Title: {order.title}</h1>
      <h3>Date: {order.date}</h3>
      <h3>Text Area: {order.textarea}</h3>

      <Button variant="primary" onClick={() => toggleModal()}>
        Edit
      </Button>
      
      <Button variant="danger" onClick={()=> props.deleteOrder(order.id)}>
        Delete
      </Button>

      

      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Please Edit Here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <EditOrder
            order={order}
            // editNote={props.editNote}
            toggleModal={toggleModal}
          />
        </Modal.Body>

      </Modal>
</Container>
    </div>
  );
}

const mapDispatch = {
  deleteOrder
}

export default connect(null, mapDispatch) (Note);