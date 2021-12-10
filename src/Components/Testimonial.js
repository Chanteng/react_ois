import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";

function Testimonial() {
  return (
    <>
      <div className="test-info">
          <h3>WHAT PEOPLE SAY ABOUT ME</h3>
          <h1>Testimonial</h1>
        <Container>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="../Images/t1.jpg?text=First slide&bg=373940"
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../Images/t2.jpg?text=Second slide&bg=282c34"
                alt="Second slide"
              />

             
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="../Images/t3.jpg?text=Third slide&bg=20232a"
                alt="Third slide"
              />

          
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  );
}

export default Testimonial;
