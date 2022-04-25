import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  let location = useLocation();
  useEffect(() => {
    //
  }, [location]);
  return (
    <header>
      <nav className={`navbar navbar-light navbar-expand-md container-fluid header navbtn`}>
        <img src={props.logo} width="150px" height="60px" alt="logo" />
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/price" ? "active" : ""
              }`}
            >
              <Link to="/price">Price</Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/service" ? "active" : ""
              }`}
            >
              <Link to="/service">Services</Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link to="/login">
                <li className="logSign">
                  <button type="button">Login</button>
                </li>
              </Link>
              <Link to="/signup">
                <li className="logSign">
                  <button type="button">Sign-Up</button>
                </li>
              </Link>{" "}
            </form>
          ) : (
            <button className="btn btn-primary my-auto" onClick={handleLogout}>
              LogOut
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
