import React from "react";
import OrderForm from "../Component/OrderForm";
import OrderList from "../Component/OrderList";
import Footer from "../Components/Footer";
import HomeNav from "../Components/HomeNav";
import Testimonial from "../Components/Testimonial";
import { Col, Container, Row, Button } from "react-bootstrap";

function Order() {
  return (
    <div>
      <HomeNav />
      <h1 className="order-txt">Welcome to the Order Page. <br/>Please fill the following forms to complete<br/>  the order process.</h1>
      <OrderForm />
      <OrderList />

      <div>
        <Container className="call">
          <Row>
          <Col md="4">Would you like to start a project with us?</Col> 

            <Col md="4">
          <p >Mail Us: <a href="mailto:oismediagh@gmail.com" style={{textDecoration: "none"}}>oismediagh@gmail.com</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              </Col> 

              <Col md="4">
          <p>Call Now: <a href="tel:+233570885254" style={{textDecoration: "none"}}><p>+233 570 885 254</p></a></p>
              </Col> 
           </Row> 
        </Container>
      </div>

      <Testimonial />
      <Footer />
    </div>
  );
}

export default Order;
