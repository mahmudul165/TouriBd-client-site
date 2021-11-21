import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Col, Container, Image, Row } from "react-bootstrap";

const Booking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const { Id } = useParams();
  const [singleUser, setsingleUser] = useState({});
  useEffect(() => {
    fetch(`https://intense-caverns-52774.herokuapp.com/packages/${Id}`)
      .then((res) => res.json())
      .then((data) => setsingleUser(data));
  }, [singleUser]);
  const axios = require("axios").default;
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://intense-caverns-52774.herokuapp.com/orders", {
        data,
        status: "pending",
      })
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Data added successfully");
          reset();
        }
      });
  };
  return (
    <>
      <div className="m-auto mb-5 pb-4">
        <Image
          fluid
          src="https://www.tourx-react.egenslab.com/static/media/breadcrumb-bg.9cc4efda.png"
          alt=""
        />
      </div>
      <div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-7 col-sm-7">
              <div>
                <img
                  height="300px"
                  width="100%"
                  alt="apartment-img"
                  src={singleUser.img}
                />
                <Container className="my-2 py-2">
                  <Row>
                    <Row>
                      <Col xs={6} md={6}>
                        <Image
                          height="100px"
                          src="https://i.ibb.co/4Y64QKv/Rectangle-410.png"
                        />
                      </Col>
                      <Col xs={6} md={6}>
                        <Image
                          height="100px"
                          src="https://i.ibb.co/nnCdXk0/Rectangle-409.png"
                        />
                      </Col>
                    </Row>
                    <Row className="my-3 py-2">
                      <Col xs={6} md={6}>
                        <Image
                          height="100px"
                          src="https://i.ibb.co/4Y64QKv/Rectangle-410.png"
                        />
                      </Col>
                      <Col xs={6} md={6}>
                        <Image
                          height="100px"
                          src="https://i.ibb.co/nnCdXk0/Rectangle-409.png"
                        />
                      </Col>
                    </Row>
                  </Row>
                </Container>
              </div>
              <div className="mt-5 house-description">
                <div className="d-flex justify-content-between mb-4">
                  <h3 className="text-secondary">{singleUser.name}</h3>
                  <h3>$ {singleUser.price}</h3>
                </div>
                <div>
                  <p> {singleUser?.description}</p>
                </div>
                <div>
                  <h5 className="text-secondary">Day Plan Details-</h5>
                  <div>
                    <div className="my-3 py-2">
                      <h4 className="text-secondary">Day 01:</h4> Arrive at
                      Khulna in the morning and transfer to our vessel...The
                      boat will immediately start its journey towards the
                      Sundarban forest. On the way, the boat will stop at
                      Karamjal Eco Park and explore the mangrove forest walking
                      through the wooden pathways, Crocodiles breeding centre
                      and arboretum. The cruising will continue until it reaches
                      Tiger point Just relax on any of your three decks, You can
                      have your lunch, tea/coffee at your free option and the
                      river flows by. Watch the magnificent forest vegetation
                      and can expect huge Crocodiles basking Sun on the shore.
                      Reach Tiger Point and if time permits forest hiking will
                      be organized to watch the wildlife overnight at katka.
                    </div>
                    <div className="my-3 py-2">
                      <h4 className="text-secondary">Day 02:</h4> Shortly after
                      sunrise we invite you to explore the narrow creeks aboard
                      a wooden rowboat, allowing a close look at the unique
                      mangrove fauna and flora. After a leisurely breakfast the
                      guide will offer a variety of activities, including an
                      easy trek to the pristine beach facing the Bay of Bengal
                      of a hike through the mangroves. Then cruise towards
                      HIRONPOINT via DUBLA Upon arrival Jungle walk near forest
                      office. Afternoon explore the surrounding area of
                      HIRONPOINT than the boat start towards Harbaria, Overnight
                      at Harbaria This night you will be offered Bar- B – Q
                      dinner.
                    </div>
                    <div className="my-3 py-2">
                      <h4 className="text-secondary">Day 03:</h4>Early morning
                      we will visit Harbaria Eco tourism centre after then start
                      launch, we will back for Khulna in the evening we will
                      reach Khulna after dinner drive back to Dhaka. End Of
                      journey
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 px-2 mx-2 mb-3 pb-2">
              <div className="bg-secondary px-4 pt-5  pb-4 rounded">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group ">
                    <input
                      type="text"
                      className="form-control p-4 my-2"
                      placeholder="Full Name"
                      defaultValue={singleUser._id}
                      {...register("id")}
                    />
                    <input
                      type="text"
                      className="form-control p-4 my-2"
                      placeholder="Full Name"
                      defaultValue={singleUser.name}
                      {...register("order_name")}
                    />
                    <input
                      type="text"
                      className="form-control p-4 my-2"
                      placeholder="Full Name"
                      defaultValue={user?.displayName}
                      {...register("customer_name")}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="phone"
                      type="text"
                      className="form-control p-4 my-2"
                      placeholder="Phone No."
                      {...register("phone")}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="email"
                      type="text"
                      className="form-control p-4 my-2"
                      placeholder="Email Address"
                      value={user.email}
                      {...register("email")}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      type="text"
                      className="form-control p-4 my-2"
                      rows="4"
                      placeholder="Message"
                      {...register("message")}
                    ></textarea>
                  </div>
                  <input
                    className="my-2 p-2 btn btn-warning btn-block  text-white"
                    type="submit"
                    value="Request Booking"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
