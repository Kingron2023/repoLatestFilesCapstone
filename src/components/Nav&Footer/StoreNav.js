import "../../style/Navigation.css";
import { useState } from "react";

export default function StoreNav() {
  const [search, setSearch] = useState(false);

  function category() {
    const category = document.getElementById("category");
    category.classList.toggle("arrow");
  }

  function searchSm() {
    setSearch(true);
  }

  return (
    <div>
      <div className="w-100" style={{ top: "0" }} id="header">
        <header>
          <div className="ads" style={{ background: "#e9ecef" }}>
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
                    href="./signUp"
                    className="normal-font f-xsm border-end px-3"
                  >
                    Join us
                  </a>
                </li>
                <li className="pb-1">
                  <a href="./signIn" className="normal-font f-xsm" id="sign-in">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <nav
            className="d-flex justify-content-between align-items-center gap-5 position-relative container-xxl border-bottom"
            style={{ height: "5rem" }}
          >
            <div className="d-flex align-items-center gap-5">
              <div className="d-flex justify-content-center align-items-center">
                <a href="./store" className="fw-bold title-font fs-4">
                  {/* <img src={logo} alt="logo" style={{ height: "2rem" }} /> */}
                  Brand
                </a>
              </div>
            </div>

            {/* NAV LINKS */}
            <div
              className="navbar navbar-expand-lg nav-list w-100"
              aria-label="Offcanvas navbar large"
            >
              <div className="container-fluid">
                <button
                  className="navbar-toggler nav-list-menu"
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
                  <div className="offcanvas-header justify-content-end">
                    <span data-bs-dismiss="offcanvas" aria-label="Close">
                      <ion-icon name="close-outline"></ion-icon>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* SEARCH */}

            <div
              className="w-100 border d-flex align-items-center rounded-5 px-3 display-none"
              style={{ padding: ".2rem" }}
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
            </div>

            <div className="d-flex gap-2 align-items-center">
              <div className="d-flex gap-4">
                <div className="d-flex justify-content-center align-items-center search-icon">
                  <span
                    className="d-flex justify-content-center h-auto"
                    onClick={searchSm}
                  >
                    <ion-icon name="search-outline"></ion-icon>
                  </span>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                  <span className="d-flex justify-content-center h-auto">
                    <ion-icon name="heart-outline"></ion-icon>
                  </span>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                  <a href="./cart">
                    <div className="position-relative">
                      <span className="d-flex justify-content-center h-auto">
                        <ion-icon name="cart-outline"></ion-icon>
                      </span>
                    </div>
                  </a>
                </div>

                <div
                  className="d-flex justify-content-center align-items-center menu"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar2"
                  aria-controls="offcanvasNavbar2"
                  aria-label="Toggle navigation"
                >
                  <div className="position-relative">
                    <span className="d-flex justify-content-center h-auto">
                      <ion-icon name="menu-outline"></ion-icon>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* SEARCCH BAR */}
          {search && (
            <div className="fixed-top">
              <div className="container-xxl search-bar py-4">
                <div className="w-100 d-flex align-items-center gap-3 ">
                  <div
                    className="w-100 border d-flex align-items-center rounded-5 px-3"
                    style={{ padding: ".1rem" }}
                  >
                    <input
                      type="text"
                      className="form-control search border-0"
                      id="search"
                      placeholder="Search product, brand or category..."
                    />
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="d-flex justify-content-center h-auto">
                        <ion-icon name="search-outline"></ion-icon>
                      </span>
                    </div>
                  </div>
                  <a
                    onClick={() => setSearch(false)}
                    style={{ cursor: "pointer" }}
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}
