import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomeNav from "../Components/HomeNav";
import Testimonial from "../Components/Testimonial";

function Home() {
  return (
    <>
      <HomeNav />
      <Header />


      <br /> <br /> <br /> <br />


      <div className="card-info">
        <h2>How can I help you?</h2>
        <h5>
          Find below some of the best ways I can help you turn your ideas into
          reality...
        </h5>
        <br />
        <div className="container">
          <div className="card-intro">
            <div className="row">
              <div
                className="card"
                style={{
                  width: "20rem",
                  marginTop: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <img src="../Images/b.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Design</h4>
                  <p className="card-text">
                    I design customized invites, flyers, banners, cover arts,
                    brochures, book covers just to name but a few.
                  </p>
                  <a href="/order" className="btn btn-primary">
                    ORDER NOW
                  </a>
                </div>
              </div>

              <div
                className="card"
                style={{
                  width: "20rem",
                  marginTop: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <img src="../Images/f.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Branding</h4>
                  <p className="card-text">
                    I will create a logo, product design, create a website,
                    create a brand identity that will take your business to the
                    next level
                  </p>
                  <a href="/order" className="btn btn-primary">
                    ORDER NOW
                  </a>
                </div>
              </div>

              <div
                className="card"
                style={{
                  width: "20rem",
                  marginTop: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <img src="../Images/c.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Coaching</h4>
                  <p className="card-text">
                    I mentor individuals and groups in their graphic design
                    career. I will take you from a very beginner to a pro within
                    the shortest possible time. Click on the Button now.
                  </p>
                  <a href="/contact" className="btn btn-primary">
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <br /> <br /> <br /> <br /> <br />


      <div className="gallery-info">
        <div className="container">
          <h2>Gallery</h2>
          <h6>
            With over 500 projects done, I can’t upload all my works here, but
            find below<p> some of the amazing works I’ve done so far</p>
          </h6>
          <div classNameName="gallery-intro">
            <div className="row">
              <div
                className="card-gallery"
                style={{
                  width: "18rem",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <img src="../Images/g1.jpg" className="card-img-top" alt="Evangelism" />
              </div>

              <div
                className="card-gallery"
                style={{
                  width: "18rem",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <img src="../Images/g2.jpg" className="card-img-top" alt="Naming Ceremony" />
              </div>

              <div
                className="card-gallery"
                style={{
                  width: "18rem",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <img src="../Images/g3.jpg" className="card-img-top" alt="Birthday" />
              </div>

              <div
                className="card-gallery"
                style={{
                  width: "18rem",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <img src="../Images/g4.jpg" className="card-img-top" alt="Worship" />
              </div>
            </div>
            
          </div>
          <a href="/gallery" className="btn btn-primary">
                    SEE MORE OF OUR WORKS
                  </a>
        </div>
      </div>

      <br /> <br /> <br /> <br />


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

      <br /> <br />  <br /> <br /> <br />
                
      <Testimonial />
      <Footer />
      
    </>
  );
}

export default Home;
