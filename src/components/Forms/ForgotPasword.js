import React, { useState } from "react";
import "./Common.css";
import { Link } from "react-router-dom";
import SetNewPassword from "./SetNewPassword";

function ForgotPasword(props) {
  const [email, setEmail] = useState("");
  
  const [showOtpForm, setShowOtpForm] = useState(true);
  console.log(setShowOtpForm);

  const sendOtp = async (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="formStyle d-flex flex-column align-items-center py-4">
      <Link to="/">
        <img id="logo" src={props.logo} alt="Blood Warriors" />
      </Link>
      {showOtpForm ? (
        <form id="form">
          <h3>Enter Your Email</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="Btn" onClick={sendOtp}>
            Send Otp
          </div>
          <Link id="Btn" to="/login">
            Back
          </Link>
        </form>
      ) : (
       <SetNewPassword email={email} />
      )}
    </div>
  );
}

export default ForgotPasword;
