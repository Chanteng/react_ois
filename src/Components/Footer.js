import React from "react";
import {FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"


function Footer() {
  return (
    <>
      <div className="footer-area">
        <div className="main">
          <div className="footer">
            <div className="single-footer">
              <h4>about us</h4>
              <p>
                Welcome to OIS_MEDIA, We are the only number one Printing Press
                with a website and an app. Contact or Order for your services
                now. Thank you!
                <br /> #WE DO GENUINE BUSINESS...
              </p>
              <div className="footer-social">
                <a href="#">
                  <FaFacebook size="2rem" />
                </a>
                <a href="#">
                  <FaInstagram size="2rem"  />
                </a>
                <a href="#">
                  <FaTwitter size="2rem" />
                </a>
                <a href="#">
                 <FaYoutube size="2rem" />
                </a>
              </div>
            </div>

            <div className="single-footer">
              <h4>main menu</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                <li>
                  <a href="/order">Order</a>
                </li>
              </ul>
            </div>

            <div className="single-footer">
              <h4>quick links</h4>
              <ul>
                <li>
                  <a href="https://web.facebook.com/oismedia/" target="_blank">Facebook</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCL8A_OcHbRxugTQRv5UZacw" target="_blank">Youtube</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_oismedia/" target="_blank">Instagram</a>
                </li>
                <li>
                  <a href="https://twitter.com/_oismedia" target="_blank">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy">
            <p>
              {" "}
              &copy; all rights reserved OIS_MEDIA 2021 | | Designed By:
              Chanteng
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/+233570885254"
          className="whatsapp_float"
          target="_blank"
        >
         <FaWhatsapp className="whatsapp-icons" size="2rem" />
        </a>
      </div>
    </>
  );
}

export default Footer;
