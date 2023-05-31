import { useState } from "react";

import "../../style/SignUp.css";

export default function Product() {
  const [activeButtton, setActiveButton] = useState();

  const handleClick = (id) => {
    setActiveButton(id);
  };

  return (
    <div>
      <div className="container-xxl mt-5">
        <div className="overflow-x-auto account-btn">
          <div className="d-flex gap-3" style={{ width: "65rem" }}>
            <button
              className={`btn btn-light px-4 py-2 rounded-5 ${
                activeButtton === "women" ? "bg-dark text-light" : ""
              }`}
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
              id="women"
              onClick={() => handleClick("women")}
            >
              Women's Clothing
            </button>
            <button
              className={`btn bg-light px-4 py-2 rounded-5 ${
                activeButtton === "men" ? "bg-dark text-light" : ""
              } `}
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              id="men"
              onClick={() => handleClick("men")}
            >
              Men's Clothing
            </button>
            <button
              className={`btn bg-light px-4 py-2 rounded-5 ${
                activeButtton === "home" ? "bg-dark text-light" : ""
              } `}
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              id="home"
              onClick={() => handleClick("home")}
            >
              Smart Home Hubs
            </button>
            <button
              className={`btn bg-light px-4 py-2 rounded-5 ${
                activeButtton === "device" ? "bg-dark text-light" : ""
              } `}
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              id="device"
              onClick={() => handleClick("device")}
            >
              Electronics & Devices
            </button>
            <button
              className={`btn bg-light px-4 py-2 rounded-5 ${
                activeButtton === "machine" ? "bg-dark text-light" : ""
              } `}
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
              id="machine"
              onClick={() => handleClick("machine")}
            >
              Agricultural Machinaries
            </button>
          </div>
        </div>

        <div id="carouselExampleCaptions" className="carousel slide  mt-5">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h1 className="text-center">Women's Clothing</h1>
            </div>
            <div className="carousel-item">
              <h1 className="text-center">Men's Clothing</h1>
            </div>
            <div className="carousel-item">
              <h1 className="text-center">Smart Home Hubs</h1>
            </div>
            <div className="carousel-item">
              <h1 className="text-center">Electronics & Devices</h1>
            </div>
            <div className="carousel-item">
              <h1 className="text-center">Agricultural Machinaries</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
