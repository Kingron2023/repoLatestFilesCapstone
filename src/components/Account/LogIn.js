import { useState } from "react";
import logo from "../../Img/Icon/logo.png";
import signUp from "../../Img/signUp/signUp.svg";

import "../../style/SignUp.css";

import axios from "axios";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="py-5" style={{ height: "100vh" }}>
      <div className="container-xl">
        <div className="d-flex">
          <a href="/" className="fw-bold title-font fs-4">
            <img src={logo} alt="logo" style={{ height: "2.6rem" }} />
          </a>
        </div>

        <div className="position-absolute top-50 start-50 translate-middle w-100">
          <div className="pb-5" style={{ marginTop: "5rem" }}>
            <div className="gy-3 gx-5 align-items-center">
              <div className="">
                <div className="">
                  <h1 className="display-5 fw-semibold text-center">Sign in</h1>

                  <p className="text-center">
                    Welcome back! Please enter your details.
                  </p>

                  <div className="mt-3 d-flex justify-content-center">
                    <form>
                      <div className="row g-3 m-0 logIn">
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="email"
                              className="form-control input-left box-2 rounded-5 border-0"
                              id="LogInemail"
                              placeholder=" "
                              required
                              name="email"
                            />
                            <label className="label-left" htmlFor="LogInemail">
                              Email
                            </label>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="password"
                              className="form-control input-left box-2 rounded-5 border-0"
                              id="LogInpassword"
                              placeholder=" "
                              required
                              name="password"
                            />
                            <label
                              className="label-left"
                              htmlFor="LogInpassword"
                            >
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="col-12 mt-4">
                          <input
                            type="submit"
                            className="btn w-100 btn-dark px-4 py-3 rounded-5"
                            value="Sign In"
                          />
                        </div>

                        <p className="mt-3 normal-font text-secondary text-center">
                          Already have an account?{" "}
                          <Link to="/signUp">
                            <span className="text-success">Sign up</span>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
