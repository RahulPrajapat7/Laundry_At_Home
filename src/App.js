import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import Price from "./components/Price/Price";
import Footer from "./components/Footer/Footer";
import logo from "./logo.svg";
import Service from "./components/Sevices/Service";
import Login from "./components/Forms/Login";
import ForgotPasword from "./components/Forms/ForgotPasword";
import SignUp from "./components/Forms/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Alert from "./components/Alert/Alert";
// import reducer from "./reducer";
import { applyMiddleware, compose, createStore } from "redux";
import ContactUs from "./components/Contact US/ContactUs";
import AddToCart from "./components/AddToCart/AddToCart";
// import thunk from "redux-thunk";
// import { Provider } from "react-redux";

// const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // const [mode, setMode] = useState("navbtn");
  // const handleChangeColor = () => {
  //   if(mode==='navbtn'){
  //   setMode(
  //    'navbtn1'
  //   )
  //   document.body.style.backgroundColor="grey";
  //   }
  //   else{
  //     setMode(
  //      'navbtn'
  //     )
  //     document.body.style.backgroundColor="white";
  // };
  // }
  return (
    <>
      {" "}
      <Router>
        <Navbar
          title="onlinelLaundary"
          logo={logo}
          // mode={mode}
          // handleChangeColor={handleChangeColor}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert} />} />
          <Route exact path="/price" element={<Price />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/cart" element={<AddToCart />} />
          <Route
            exact
            path="/login"
            element={<Login logo={logo} showAlert={showAlert} />}
          />
          <Route
            exact
            path="/signup"
            element={<SignUp logo={logo} showAlert={showAlert} />}
          />

          <Route
            exact
            path="/forgot_password"
            element={<ForgotPasword logo={logo} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
