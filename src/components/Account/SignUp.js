import { useState } from "react";
import logo from "../../Img/Icon/logo.png";
import signUp from "../../Img/signUp/signUp.svg";

import "../../style/SignUp.css";

import { useNavigate } from "react-router";

import { Link } from "react-router-dom";

export default function SignUp() {
  const [businessname, setBusinessname] = useState();
  const [businessowner, setBusinessowner] = useState();
  const [businessaddress, setBusinessaddress] = useState();
  const [contactinfo, setContactinfo] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("businessname", businessname);
    formData.append("businessowner", businessowner);
    formData.append("businessaddress", businessaddress);
    formData.append("contactinfo", contactinfo);
    formData.append("email", email);
    formData.append("password", password);

    fetch("http://localhost/Smart_Drop/index.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Display the response from the PHP script
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setBusinessname("");
    setBusinessowner("");
    setBusinessaddress("");
    setContactinfo("");
    setEmail("");
    setPassword("");

    navigate("/signIn");
  };

  return (
    <div className="py-4" style={{ height: "100vh" }}>
      <div className="container-xl">
        <div className="d-flex">
          <a href="/" className="fw-bold title-font fs-4">
            <img src={logo} alt="logo" style={{ height: "2.6rem" }} />
          </a>
        </div>

        <div className="pb-5" style={{ marginTop: "4rem" }}>
          <div className="row gy-3 gx-5 align-items-center">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="">
                <h1 className="display-5 fw-semibold text-center">
                  Create an account.
                </h1>

                <p className="text-center">
                  Let's level up your brand, together.
                </p>

                <div className="mt-4">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control input-left box-2 rounded-5 border-0"
                            placeholder=" "
                            required
                            name="businessname"
                            value={businessname}
                            onChange={(event) =>
                              setBusinessname(event.target.value)
                            }
                          />
                          <label className="label-left" htmlFor="Business name">
                            Business Name
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control input-left box-2 rounded-5 border-0 px-5 input-left"
                            placeholder=" "
                            required
                            name="businessowner"
                            value={businessowner}
                            onChange={(event) =>
                              setBusinessowner(event.target.value)
                            }
                          />
                          <label className="label-left" htmlFor="businessOwner">
                            Business Owner's Name
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control input-left box-2 rounded-5 border-0"
                            placeholder=" "
                            required
                            name="businessaddress"
                            value={businessaddress}
                            onChange={(event) =>
                              setBusinessaddress(event.target.value)
                            }
                          />
                          <label
                            className="label-left"
                            htmlFor="BusinessAddress"
                          >
                            Business Address
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control input-left box-2 rounded-5 border-0"
                            placeholder=" "
                            required
                            name="contactinfo"
                            value={contactinfo}
                            onChange={(event) =>
                              setContactinfo(event.target.value)
                            }
                          />
                          <label className="label-left" htmlFor="contactinfo">
                            Contact Information
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control input-left box-2 rounded-5 border-0"
                            placeholder=" "
                            required
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                          />
                          <label className="label-left" htmlFor="email">
                            Email
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="password"
                            className="form-control input-left box-2 rounded-5 border-0"
                            placeholder=" "
                            required
                            name="password"
                            value={password}
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                          />
                          <label className="label-left" htmlFor="password">
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="col-12 d-flex justify-content-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          required
                        />
                        <label
                          className="form-check-label ps-3"
                          htmlFor="flexCheckDefault"
                        >
                          I agree to all Term, Privacy and Fees
                        </label>
                      </div>

                      <div className="col-12 mt-4">
                        <input
                          type="submit"
                          className="btn w-100 btn-dark px-4 py-3 rounded-5"
                          value="Sign up"
                        />
                      </div>

                      <p className="mt-3 normal-font text-secondary text-center">
                        Already have an account?{" "}
                        <Link to="/signIn">
                          <span className="text-success">Sign in</span>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-6 display-hide">
              <div className="card">
                <img src={signUp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
