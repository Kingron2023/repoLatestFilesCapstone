import { useState } from "react";
import Footer from "../components/Footer";
import StoreNav from "../components/Nav&Footer/StoreNav";
import "../style/SignUp.css";
import Product from "./Reusable/Product";

export default function Store() {
  return (
    <div>
      <StoreNav />

      <Product />

      <Footer />
    </div>
  );
}
