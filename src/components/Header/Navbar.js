import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <header>
      <nav
        className="navbar navbar-light navbar-expand-md container-fluid header"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <img src={props.logo} width="150px" height="60px" alt="logo" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item ">
              <Link to="/price">Price</Link>
            </li>
            <li className="nav-item ">
              <Link to="/service">Services</Link>
            </li>
            <li className="nav-item ">
              <Link to="/">Contact Us</Link>
            </li>
            <li className="logSign">
              <button type="button">Login</button>
            </li>
            <li className="logSign">
              <button type="button">Sign-Up</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
