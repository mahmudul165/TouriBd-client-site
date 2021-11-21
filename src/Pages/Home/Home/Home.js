import React from "react";
import About from "../About/About";
import Contract from "../Contract/Contract";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import OtherServices from "../OtherServices/OtherServices";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <OtherServices> </OtherServices>
      <About></About>
      <AboutUs></AboutUs>
      <Contract></Contract>
    </div>
  );
};

export default Home;
