import Footer from "./Footer";
import StoreNav from "./Nav&Footer/StoreNav";

import signUp from "../Img/signUp/signUp.png";

import mastercard from "../Img/Icon/mastercard.png";
import paypal from "../Img/Icon/paypal.webp";
import paymaya from "../Img/Icon/paymaya.jpg";
import Visa from "../Img/Icon/Visa.jpg";

export default function Cart() {
  return (
    <div>
      <StoreNav />
      <div className="container-xl" style={{ marginTop: "4rem" }}>
        <div className="row g-4">
          <div className="col-12 col-md-7">
            <h1 className="display-6 fw-bold">YOUR BAG</h1>
            <p className="mt-2">
              TOTAL (0 item) <span className="fw-bold">₱.....</span>
            </p>
            <p className="mt-2">
              Items in your bag are not reserved — check out now to make them
              yours.
            </p>

            {/* <div className="mt-5 d-flex gap-4 border pe-3 position-relative">
              <div
                className="card"
                style={{ maxWidth: "14rem", minWidth: "6rem" }}
              >
                <img src={signUp} className="border" alt="item" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <div className="d-flex align-items-center w-100 justify-content-between gap-5">
                    <p>TRAE PLAYOFF GRAPHIC TEE</p>

                    <div className="d-flex align-items-center justify-content-end gap-4">
                      <p className="fw-bold price-lg">₱1,780</p>
                      <span className="d-flex">
                        <ion-icon name="close-outline"></ion-icon>
                      </span>
                    </div>
                  </div>

                  <p>WHITE</p>
                  <p className="mt-2">SIZE: A/3XL</p>

                  <p className="mt-5 fw-bold d-flex justify-content-between">
                    <span className="price-sm">₱1,780</span> Qty: 1
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="col-12 col-md-5">
            <div className="box-2 py-3 px-4 rounded-4">
              <div className="mt-3">
                <h5 className="fw-bold fs-6 font-monospace">ORDER SUMMARY</h5>

                <div className="d-flex justify-content-between mt-4">
                  <p>0 item</p>
                  <p>₱......</p>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <p>Delivery</p>
                  <p>₱......</p>
                </div>
                <hr className="mt-4" />
                <div className="d-flex justify-content-between mt-4">
                  <p className="fw-semibold font-monospace">Total</p>
                  <p className="fw-semibold">₱.....</p>
                </div>
                <hr className="mt-4" />

                <div className="d-grid mt-4">
                  <button className="btn btn-dark py-3 fw-semibold font-monospace rounded-5">
                    CHECKOUT
                  </button>
                </div>

                <div className="mt-5 pb-3">
                  <p className="fw-semibold f-sm">ACCEPTED PAYMENT METHODS</p>
                  <div className="d-flex mt-3">
                    <div className="overflow-hidden">
                      <div className="card" style={{ width: "3.4rem" }}>
                        <img className="border" src={Visa} alt="visa" />
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="card" style={{ width: "3.4rem" }}>
                        <img className="border" src={mastercard} alt="visa" />
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="card" style={{ width: "3.4rem" }}>
                        <img className="border" src={paymaya} alt="visa" />
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="card" style={{ width: "3.4rem" }}>
                        <img className="border" src={paypal} alt="visa" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
