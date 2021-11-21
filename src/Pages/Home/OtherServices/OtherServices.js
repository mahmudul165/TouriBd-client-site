import React from "react";
const OtherServices = () => {
  return (
    <div className="container">
      <h3 className="gy-4 mt-3 py-2">
        Others <span className="text-warning gy-4 mt-3 py-2">Services</span>
      </h3>
      <div className="m-auto row my-3 py-2">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="service-item style1">
            <div className="service-img">
              <a>
                <img src="https://detour.hibootstrap.com/images/service/service-1.png" />
              </a>
            </div>
            <div className="service-info">
              <h4>
                <a>Car Rental Services</a>
              </h4>
              <p>100+ Listing</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="service-item style1">
            <div className="service-img">
              <a>
                <img
                  src="https://detour.hibootstrap.com/images/service/service-2.png"
                  alt="Image"
                />
              </a>
            </div>
            <div className="service-info">
              <h4>
                <a>Hotel Booking </a>
              </h4>
              <p>78+ Listing</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="service-item style1">
            <div className="service-img">
              <a>
                <img
                  src="https://detour.hibootstrap.com/images/service/service-3.png"
                  alt="Image"
                />
              </a>
            </div>
            <div className="service-info">
              <h4>
                <a>Restaurent</a>
              </h4>
              <p>50+ Listing</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="service-item style1">
            <div className="service-img">
              <a>
                <img
                  src="https://detour.hibootstrap.com/images/service/service-4.png"
                  alt="Image"
                />
              </a>
            </div>
            <div className="service-info">
              <h4>
                <a>Club &amp; Bar</a>
              </h4>
              <p>90+ Listing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
