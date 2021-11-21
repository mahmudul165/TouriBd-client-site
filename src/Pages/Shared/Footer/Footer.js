import "../Footer/Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-success">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <h2 className="footer-title">About Us</h2>
                </div>
                <div className="footer-about-content">
                  <p>
                    We understand the criticality of time in Tour. is the
                    largest directory of Bangladesh tour and travel. We have
                    tried to list out all tourist spots of Bangladesh.
                  </p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#home">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#home">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#home">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#home">
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Quick Link</h2>
                <ul className="justify-content-start">
                  <li>
                    <a href="#home">Services</a>
                  </li>
                  <li>
                    <a to="/login">Login</a>
                  </li>
                  <li>
                    <a to="/register">Register</a>
                  </li>
                  <li>
                    <a to="/booking">Booking</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Discover</h2>
                <ul>
                  <li>
                    <a href="#home">About Us</a>
                  </li>
                  <li>
                    <a href="#home">Chat</a>
                  </li>
                  <li>
                    <a href="#home">Entertainment</a>
                  </li>

                  <li>
                    <a to="/doctor-dashboard">Our Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-contact">
                <h2 className="footer-title">Contact Us</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span>
                      <i className="fa fa-map-marker  " aria-hidden="true"></i>
                    </span>
                    <p className="">
                      3556 Mugda Street, Dhaka-1205, Bangladesh
                    </p>
                  </div>
                  <p>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    +8801749160165
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    TourBd@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-success">
        <div className="container-fluid">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="copyright-text">
                  <p className="mb-0">© 2021 Tour Bd. All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="copyright-menu">
                  <ul className="policy-menu bg-success  text-white">
                    <li>
                      <a to="/terms">Terms and Conditions</a>
                    </li>
                    <li>
                      <a to="/privacy-policy">Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
