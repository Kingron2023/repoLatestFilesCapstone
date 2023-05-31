import "../../style/Navigation.css";
import { useState } from "react";

export default function AccountNav() {
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
          <nav
            className="d-flex justify-content-between align-items-center gap-5 position-relative container-xxl border-bottom"
            style={{ height: "5rem" }}
          >
            <div className="d-flex align-items-center gap-5">
              <div className="d-flex justify-content-center align-items-center">
                <a href="./index.php" className="fw-bold title-font fs-4">
                  {/* <img src={logo} alt="logo" style={{ height: "2rem" }} /> */}
                  Brand
                </a>
              </div>
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
                  <div className="btn d-flex py-2 px-4 rounded-5 gap-3 align-items-center box-2 ">
                    <a className=" border-0 d-flex fw-semibold ">
                      Purchase Products
                    </a>
                  </div>
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
        </header>
      </div>
    </div>
  );
}
