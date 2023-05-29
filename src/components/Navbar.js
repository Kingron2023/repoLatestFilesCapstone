import logo from "../Img/Icon/logo.png";
import "../style/Navigation.css";
import rocket from "../Img/Icon/rocket.png";
import tag from "../Img/Icon/tag.png";
import { useState } from "react";

export default function Navbar() {
  const [house, sethouse] = useState(false);
  const [game, setGametech] = useState(false);
  const [clothing, setClothing] = useState(false);
  const [tools, setTools] = useState(false);

  function houseHover() {
    sethouse(true);
    setGametech(false);
    setClothing(false);
    setTools(false);
  }

  function gametechHover() {
    setGametech(true);
    sethouse(false);
    setClothing(false);
    setTools(false);
  }

  function clothingHover() {
    setClothing(true);
    setGametech(false);
    sethouse(false);
    setTools(false);
  }

  function toolsHover() {
    setTools(true);
    setClothing(false);
    setGametech(false);
    sethouse(false);
  }

  function mouseOut() {
    sethouse(false);
    setGametech(false);
    setClothing(false);
    setTools(false);
  }

  function category() {
    const category = document.getElementById("category");
    category.classList.toggle("arrow");
  }

  return (
    <div>
      <div className="position-fixed w-100" style={{ top: "0" }} id="header">
        <header>
          <div className="" style={{ background: "#e9ecef" }}>
            <div
              className="d-flex align-items-center justify-content-between  container-xxl"
              style={{ height: "2.2rem", background: "#e9ecef" }}
            >
              <h6 className="normal-font f-xsm text-center m-0">
                Explore Our New Locations
              </h6>

              <ul className="d-flex gap-2 align-items-center m-0">
                <li className="pb-1">
                  <a href="#" className="normal-font f-xsm border-end px-3">
                    About
                  </a>
                </li>
                <li className="pb-1">
                  <a
                    href="./contact.php"
                    className="normal-font f-xsm border-end px-3"
                  >
                    Help
                  </a>
                </li>
                <li className="pb-1">
                  <a
                    href="./signUp.php"
                    className="normal-font f-xsm border-end px-3"
                  >
                    Join us
                  </a>
                </li>
                <li className="pb-1">
                  <a
                    href="./login.php"
                    className="normal-font f-xsm"
                    id="sign-in"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <nav
            className="d-flex justify-content-between align-items-center gap-5 position-relative container-xxl"
            style={{ height: "5rem" }}
          >
            <div className="d-flex align-items-center gap-5">
              <div className="d-flex justify-content-center align-items-center">
                <a href="./index.php" className="fw-bold">
                  <img src={logo} alt="logo" style={{ height: "2rem" }} />
                </a>
              </div>
            </div>

            <div
              className="w-100 border d-flex align-items-center rounded-5 ps-3"
              style={{ padding: ".4rem" }}
            >
              <div className="d-flex justify-content-center align-items-center">
                <span className="d-flex justify-content-center h-auto">
                  <ion-icon name="search-outline"></ion-icon>
                </span>
              </div>
              <input
                type="text"
                className="form-control search border-0"
                id="search"
                placeholder="Search product, brand or category..."
              />
              <button className="btn btn-light rounded-5 px-4 py-2 border-0">
                Search
              </button>
            </div>

            <div className="d-flex gap-2 align-items-center">
              <div className="d-flex gap-4">
                <div className="d-flex justify-content-center align-items-center">
                  <span className="d-flex justify-content-center h-auto">
                    <ion-icon name="heart-outline"></ion-icon>
                  </span>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                  <div className="position-relative">
                    <span className="d-flex justify-content-center h-auto">
                      <ion-icon name="cart-outline"></ion-icon>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* NAV LINKS */}
          <div
            className="navbar navbar-expand-lg nav-list"
            aria-label="Offcanvas navbar large"
            style={{ background: "#e9ecef" }}
          >
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar2"
                aria-controls="offcanvasNavbar2"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasNavbar2"
                aria-labelledby="offcanvasNavbar2Label"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                    Offcanvas
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div className="container-xxl">
                    <ul className="navbar-nav justify-content-start flex-grow-1 d-flex align-items-center gap-4">
                      <div className="dropdown">
                        <li>
                          <a
                            href="#"
                            className="normal-font pe-3 d-flex align-items-center gap-3 border-end f-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={category}
                          >
                            Choose the category
                            <span className="d-flex" id="category">
                              <ion-icon name="chevron-down-outline"></ion-icon>
                            </span>
                          </a>
                          <ul className="dropdown-menu border-0 rounded-0 mt-3 box">
                            <li>
                              <div
                                className="dropdown-item"
                                onMouseEnter={houseHover}
                              >
                                <div className="py-3 d-flex align-items-center justify-content-between gap-4">
                                  <div className="d-flex align-items-center gap-3">
                                    <span className="d-flex right-arrow">
                                      <ion-icon name="home-outline"></ion-icon>
                                    </span>
                                    <h6 className="m-0">House equipment</h6>
                                  </div>
                                  <span className="d-flex right-arrow">
                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                  </span>
                                </div>
                                {house && (
                                  <div
                                    className="mt-2 border-0 box-2"
                                    onMouseLeave={mouseOut}
                                    style={{
                                      position: "absolute",
                                      top: "0",
                                      left: "15rem",
                                    }}
                                  >
                                    <ul>
                                      <li className="px-3">
                                        <a href="#">
                                          <div className="py-3 d-flex align-items-center justify-content-start gap-4">
                                            <div className="d-flex align-items-center gap-3">
                                              <ion-icon name="phone-portrait-outline"></ion-icon>
                                              <h6 className="m-0">
                                                Smart Appliances
                                              </h6>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="px-3">
                                        <a href="#">
                                          <div className="py-3 d-flex align-items-center justify-content-start gap-4">
                                            <div className="d-flex align-items-center gap-3">
                                              <ion-icon name="flash-outline"></ion-icon>
                                              <h6 className="m-0">
                                                Smart Lighting System
                                              </h6>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="px-3">
                                        <a>
                                          <div className="py-3 d-flex align-items-center justify-content-start gap-4">
                                            <div className="d-flex align-items-center gap-3">
                                              <ion-icon name="keypad-outline"></ion-icon>
                                              <h6 className="m-0">
                                                Smart Security Systems
                                              </h6>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </li>
                            <li>
                              <div
                                className="dropdown-item"
                                onMouseEnter={gametechHover}
                              >
                                <div className="py-3 d-flex align-items-center justify-content-between gap-4">
                                  <div className="d-flex align-items-center gap-3">
                                    <ion-icon name="game-controller-outline"></ion-icon>
                                    <h6 className="m-0">Gametech</h6>
                                  </div>
                                  <span className="d-flex right-arrow">
                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                  </span>
                                </div>
                                {game && (
                                  <div
                                    className="border-0 box-2"
                                    onMouseLeave={mouseOut}
                                    style={{
                                      position: "absolute",
                                      top: "4.2rem",
                                      left: "15rem",
                                    }}
                                  >
                                    <ul>
                                      <li className="px-3">
                                        <a href="#">
                                          <div className="py-3 d-flex align-items-center justify-content-start gap-4">
                                            <div className="d-flex align-items-center gap-3">
                                              <ion-icon name="tv-outline"></ion-icon>
                                              <h6 className="m-0">
                                                Gaming PCs
                                              </h6>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="px-3">
                                        <a href="#">
                                          <div className="py-3 d-flex align-items-center justify-content-start gap-4">
                                            <div className="d-flex align-items-center gap-3">
                                              <ion-icon name="cube-outline"></ion-icon>
                                              <h6 className="m-0">
                                                Gaming Consoles
                                              </h6>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="px-3">
                                        <a href="#">
                                          <div className="py-3 d-flex align-items-center justify-content-start gap-4">
                                            <div className="d-flex align-items-center gap-3">
                                              <ion-icon name="headset-outline"></ion-icon>
                                              <h6 className="m-0">
                                                Gaming Accessories
                                              </h6>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </li>
                            <li>
                              <div
                                className="dropdown-item"
                                onMouseEnter={clothingHover}
                              >
                                <div className="py-3 d-flex align-items-center justify-content-between gap-4">
                                  <div className="d-flex align-items-center gap-3">
                                    <span className="d-flex right-arrow">
                                      <ion-icon name="shirt-outline"></ion-icon>
                                    </span>
                                    <h6 className="m-0">Clothing</h6>
                                  </div>
                                  <span className="d-flex right-arrow">
                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                  </span>
                                </div>
                                {clothing && (
                                  <div
                                    className="mt-2 border-0 box-2"
                                    onMouseLeave={mouseOut}
                                    style={{
                                      position: "absolute",
                                      top: "7.4rem",
                                      left: "15rem",
                                    }}
                                  >
                                    <ul>
                                      <li className="px-3">
                                        <a href="#">
                                          <div className="py-3 d-flex align-items-center justify-content-start gap-4">
                                            <div className="d-flex align-items-center gap-3">
                                              <ion-icon name="man-outline"></ion-icon>
                                              <h6 className="m-0">
                                                Men's Clothing
                                              </h6>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="px-3">
                                        <a href="#">
                                          <div className="py-3 d-flex align-items-center justify-content-start gap-4">
                                            <div className="d-flex align-items-center gap-3">
                                              <ion-icon name="woman-outline"></ion-icon>
                                              <h6 className="m-0">
                                                Women's Clothing
                                              </h6>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="px-3">
                                        <a href="#">
                                          <div className="py-3 d-flex align-items-center justify-content-start gap-4">
                                            <div className="d-flex align-items-center gap-3">
                                              <ion-icon name="man-outline"></ion-icon>
                                              <h6 className="m-0">
                                                Children's Clothing
                                              </h6>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </li>
                            <li>
                              <div
                                className="dropdown-item"
                                onMouseEnter={toolsHover}
                              >
                                <div className="py-3 d-flex align-items-center justify-content-between gap-4">
                                  <div className="d-flex align-items-center gap-3">
                                    <span className="d-flex right-arrow">
                                      <ion-icon name="build-outline"></ion-icon>
                                    </span>
                                    <h6 className="m-0">Power and Tools</h6>
                                  </div>
                                  <span className="d-flex right-arrow">
                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                  </span>
                                </div>
                                {tools && (
                                  <div
                                    className="mt-2 border-0 box-2"
                                    onMouseLeave={mouseOut}
                                    style={{
                                      position: "absolute",
                                      top: "11.1rem",
                                      left: "15rem",
                                    }}
                                  >
                                    <ul>
                                      <li className="px-3">
                                        <a href="#">
                                          <div className="py-3 d-flex align-items-center justify-content-start gap-4">
                                            <div className="d-flex align-items-center gap-3">
                                              <ion-icon name="hammer-outline"></ion-icon>
                                              <h6 className="m-0">
                                                Hand Tools
                                              </h6>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="px-3">
                                        <a href="#">
                                          <div className="py-3 d-flex align-items-center justify-content-start gap-4">
                                            <div className="d-flex align-items-center gap-3">
                                              <ion-icon name="cut-outline"></ion-icon>
                                              <h6 className="m-0">
                                                Cutting Tools
                                              </h6>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="px-3">
                                        <a href="#">
                                          <div className="py-3 d-flex align-items-center justify-content-start gap-4">
                                            <div className="d-flex align-items-center gap-3">
                                              <ion-icon name="construct-outline"></ion-icon>
                                              <h6 className="m-0">
                                                Tool Storage
                                              </h6>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="px-3">
                                        <a href="#">
                                          <div className="py-3 d-flex align-items-center justify-content-start gap-4">
                                            <div className="d-flex align-items-center gap-3">
                                              <ion-icon name="leaf-outline"></ion-icon>
                                              <h6 className="m-0">
                                                Gardening Tools
                                              </h6>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </li>
                          </ul>
                        </li>
                      </div>
                      <li>
                        <a
                          href="#"
                          className="normal-font pe-3 d-flex align-items-center gap-2 f-sm"
                        >
                          Agricultural Machinaries
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="normal-font pe-3 d-flex align-items-center gap-2 f-sm"
                        >
                          Technology
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="normal-font pe-3 d-flex align-items-center gap-2 border-end pe-4 f-sm"
                        >
                          Clothes
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="normal-font pe-3 d-flex align-items-center gap-2 f-sm"
                        >
                          <span className="image-icon">
                            <img src={rocket} alt="rocket" />
                          </span>
                          Best Sellers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="normal-font pe-3 d-flex align-items-center gap-2 f-sm "
                        >
                          <span className="image-icon">
                            <img src={tag} alt="rocket" />
                          </span>
                          New
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="normal-font pe-3 d-flex align-items-center gap-2 f-sm"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
