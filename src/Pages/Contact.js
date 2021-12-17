import React from "react";
import HomeNav from "../Components/HomeNav";
import { Container, Row, Navbar, Col, Button, Image, CardGroup, Card} from "react-bootstrap";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <HomeNav />

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="about-nav">
            <h6 className="abt-txt">CONTACT ME</h6>
            <p className="abt-nav">
              I'd love to work and stay in touch with you, feel free to contact
              me using any of the following medium, looking forward to hearing
              from you!
            </p>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <CardGroup >
            <Card className="con-card" style={{border: "none", marginBottom: "7rem", marginRight: "5rem"}}>
              <Card.Img variant="top" src="../Images/call.jpg" />
            </Card>
            <Card className="con-card" style={{border: "none", marginBottom: "7rem", marginRight: "5rem"}}>
              <Card.Img variant="top" src="../Images/mail.jpg" />
            </Card>
            <Card className="con-card" style={{border: "none", marginBottom: "7rem", marginRight: "5rem"}}>
              <Card.Img variant="top" src="../Images/loc.jpg" />
            </Card>
          </CardGroup>
        </Row>
      </Container>

      <Testimonial />
      <Footer />
    </>
  );
}

export default Contact;
