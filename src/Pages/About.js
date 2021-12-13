import React from "react";
import HomeNav from "../Components/HomeNav";
import { Container, Button, Navbar } from "react-bootstrap";
import MAIN2 from "../MAIN2.JPG";
import Footer from "../Components/Footer"



function About() {
  return (
    <>
      <HomeNav />

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="about-nav">
            <h6 className="abt-txt">ABOUT ME</h6>
            <p className="abt-nav">
              I'd have loved to tell you more about me, but the space provided
              isn't enough, so here are a few words about me; want to know more,
              feel free to hit me up!
            </p>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <div className="card mb-4" id="about-info">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={MAIN2}
                alt="..."
                style={{ width: "105%", height: "65vh" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">
                  Hello there, My name is <b><i>ODURO ISAAC SAPEY</i></b>, and I am from
                  Apam, Ghana. I kicked off as a graphic designer by working
                  in a printing press after high school, before going to
                  University. As I spent some time around, I began designing
                  flyers, brochures, banners and got interested in creating.
                  Today, I am open to all kinds of design work, although I am
                  always drawn to passion projects that let me go back to my
                  printing press roots. <br /> <p></p><br/>Outside of my design works, I love to 
                  <i> read</i>, and for some time now, I’ve been practicing my writing
                  (I hope it shows in this little piece). I also enjoy <b>playing
                  games</b>, though projects and school don’t give me time to do it
                  regularly. <br /> <p></p><br/>I love to work with startups, though I enjoy
                  working with well established brands as well. Putting
                  together, I have worked on over <b><i>500 projects for people from
                  over 7 countries across the globe</i></b>.<br /> <p></p><br/> Suppose you like my work
                  and are ready to join the hundreds of people who have enjoyed
                  my beautiful designs; please reach out by texting or emailing
                  me. I have the right tools and expertise to touch your brand.<br/>
                  <b>See you on the “Contact page.”</b>
                </p>
                <p className="card-text">
                  <small className="text-muted">Nharnhar Quami Chanteng</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
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
          <a href="/gallery" className="btn btn-primary">SEE MORE OF OUR WORKS</a>
        </div>
      </div>


      <Footer />
    </>
  );
}

export default About;
