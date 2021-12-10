import React from "react";
import LOGO from "../LOGO.png"



const HomeNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
        <a className="navbar-brand" href="/" id="nav-txt">
          <img src={LOGO} alt="logo" className="logo" />OIS_MEDIA
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-left">
          <li className="na-li">
              <a className="nav-link" href="/"> 
              </a>
            </li> 
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
               About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
              
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNav;
