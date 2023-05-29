import "../style/Footer.css";
import logo from "../Img/Icon/logo.png";

export default function Footer() {
  return (
    <footer className="w-100 container-xxl">
      <div className="py-5 border-top ">
        <div className="row gy-4">
          <div className="col-12 col-md-6 col-lg-6">
            <ul className="d-grid gap-2">
              <li>
                <a href="./index.php" className="fw-bold">
                  <img src={logo} alt="logo" style={{ height: "2rem" }} />
                </a>
              </li>
              <li className="mt-2">
                <a href="" className="text-dark normal-font f-sm">
                  We want to change the spectacles industry <br />
                  for the better.
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            <ul className="d-grid gap-2">
              <li className="mt-2">
                <a href="" className="text-dark normal-font f-sm">
                  Platform
                </a>
              </li>
              <li>
                <a href="" className="text-dark normal-font f-sm">
                  Become a Member
                </a>
              </li>
              <li>
                <a href="" className="text-dark normal-font f-sm">
                  Student Discounts
                </a>
              </li>
              <li>
                <a href="" className="text-dark normal-font f-sm">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            <ul className="d-grid gap-2">
              <li>
                <a href="" className="text-dark normal-font f-sm">
                  Order Status
                </a>
              </li>
              <li>
                <a href="" className="text-dark normal-font f-sm">
                  Delivery
                </a>
              </li>
              <li>
                <a href="" className="text-dark normal-font f-sm">
                  Returns
                </a>
              </li>
              <li>
                <a href="" className="text-dark normal-font f-sm">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="" className="text-dark normal-font f-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            <ul className="d-grid gap-2">
              <li>
                <a href="" className="text-dark normal-font f-sm">
                  News
                </a>
              </li>
              <li>
                <a href="" className="text-dark normal-font f-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="" className="text-dark normal-font f-sm">
                  Investor
                </a>
              </li>
              <li>
                <a href="" className="text-dark normal-font f-sm">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-top f-sm normal-font py-4 d-flex align-items-center justify-content-between footer-links-parent">
        <p>&copy; 2023 Smart Drop Inc.</p>

        <ul className="list-unstyled d-flex footer-links gap-3">
          <li>
            <a className="link-body-emphasis" href="#">
              Terms of Service
            </a>
          </li>
          <li>
            <a className="link-body-emphasis" href="#">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="link-body-emphasis" href="#">
              Cookies
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
