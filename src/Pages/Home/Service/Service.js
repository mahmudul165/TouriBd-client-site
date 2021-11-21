import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useSpring, animated } from "react-spring";

const Service = ({ service }) => {
  // const {service} = props;
  const { _id, name, price, description, img } = service;
  // animation
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 2 },
  });
  return (
    <div className="service pb-3 bg-light ">
      <animated.div className="image" style={styles}>
        <img
          src={img}
          width="100px"
          height="200px"
          className="  rounded p-3   "
          alt=""
        />
      </animated.div>
      <h3 className="text-secondary">{name}</h3>
      <h5>Price:$ {price}</h5>
      <p className="px-3">{description.slice(0, 200)}</p>
      <Link to={`/booking/${_id}`}>
        <AwesomeButton className="aws-btn" type="secondary" size="large">
          <span className="mx-2">
            <i class="fas fa-info-circle"></i>
          </span>
          Details
        </AwesomeButton>
      </Link>
    </div>
  );
};

export default Service;
