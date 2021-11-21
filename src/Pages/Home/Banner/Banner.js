import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.png";
import banner3 from "../../../images/banner/banner3.png";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Discover Fantastic Places </h3>
            <p className="text-secondary">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
            <NavLink to="/package">
              <AwesomeButton className="aws-btn" type="primary" size="large">
                <span className="mx-2">
                  <i class="fas fa-hotel font-item"></i>
                </span>
                Book Now
              </AwesomeButton>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>More than 80 tours available</h3>
            <p className="text-secondary">
              We offer a variety of services and options.
            </p>
            <NavLink to="/package">
              <AwesomeButton className="aws-btn" type="primary" size="large">
                <span className="mx-2">
                  <i class="fas fa-hotel font-item"></i>
                </span>
                Book Now
              </AwesomeButton>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h4 className="fm">Enjoy a Lovely Tour</h4>
            <p className="text-secondary">
              We offer a variety of services and options.
            </p>
            <NavLink to="/package">
              <AwesomeButton className="aws-btn" type="primary" size="large">
                <span className="mx-2">
                  <i class="fas fa-hotel font-item"></i>
                </span>
                Book Now
              </AwesomeButton>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
