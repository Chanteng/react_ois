import React from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
//import Particles from "react-particles-js";
import Router from "./Components/Router"


function App() {
  return (
    <>
      {/* <Particles 
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#af9ab00"
            }
          }
        }
      }}
      /> */}
     <Router />
    </>
  );
}

export default App;
