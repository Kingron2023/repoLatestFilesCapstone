import Footer from "../components/Footer";
import "../style/SignUp.css";
import Product from "./Reusable/Product";
import AccountNav from "../components/Nav&Footer/AccountNav";

export default function Account() {
  return (
    <div>
      <AccountNav />

      <Product />

      <Footer />
    </div>
  );
}
