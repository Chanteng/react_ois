import React from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import HomeNav from "../Components/HomeNav";
import Footer from "../Components/Footer";


function Gallery() {
  return (
    <>
      <HomeNav />

      <Container>
        <Row>
            
        <div className="gal-card">
            <h1 className="gal-text">Hello! We won't be able to post all our works Here,<br/> but you can order for you work now!!!</h1>
    <img src="../Images/aa.jpg" style={{ height: "48vh", marginRight: "2rem", marginBottom: "2rem"}} />
    <img src="../Images/jj.jpg" style={{ height: "48vh", marginRight: "2rem", marginBottom: "2rem"}} />
    <img src="../Images/ee.jpg" style={{ height: "48vh", marginBottom: "2rem"}} />
    <img src="../Images/dd.jpg" style={{ height: "48vh", marginRight: "2rem", marginBottom: "2rem"}} />
    <img src="../Images/ff.jpg" style={{ height: "48vh", marginRight: "2rem", marginBottom: "2rem"}} />
    <img src="../Images/cc.jpg" style={{ height: "48vh", marginBottom: "2rem"}} />
    <img src="../Images/hh.jpg" style={{ height: "48vh", marginRight: "2rem", marginBottom: "2rem"}} />
    <img src="../Images/ii.jpg" style={{ height: "48vh", marginRight: "2rem", marginBottom: "2rem"}} />
    <img src="../Images/bb.jpg" style={{ height: "48vh", marginBottom: "2rem"}} />
    <a href="/order" className="btn btn-primary" id="gal-btn">ORDER NOW!!!</a>
    </div>

        </Row>
      </Container>

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

      <Footer />

    </>
  );
}

export default Gallery;
