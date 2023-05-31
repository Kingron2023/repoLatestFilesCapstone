import "./style/style.css";
import "./style/General.css";
import Store from "./components/Store";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Account/SignUp";
import LogIn from "./components/Account/LogIn";
import Account from "./components/Account";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<LogIn />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
