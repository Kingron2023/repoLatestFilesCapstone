import { Link } from "react-router-dom";
import logo from "./Img/Icon/logo.png";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid container-xxl py-3">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="logo" style={{ height: "2rem" }} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/signUp">
                Sign up
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/signIn">
                Sign In
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/store">
                Store
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/account">
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
