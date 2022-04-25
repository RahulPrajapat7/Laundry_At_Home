import React, { useState } from "react";
import "./Common.css";
import { Link, useNavigate } from "react-router-dom";

export default function SetNewPassword({ email }) {
  let navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [otp, setOtp] = useState("");
  const [errorField, setErrorField] = useState({
    passwordErr: "",
    cpasswordErr: "",
    otpCodeErr: "",
  });
  const validForm = () => {
    let formIsValid = true;
    setErrorField({
      passwordErr: "",
      cpasswordErr: "",
      otpCodeErr: "",
    });
    if (otp === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        otpCodeErr: "Please Enter OTP!",
      }));
    }
    if (password === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        passwordErr: "Please Enter Password!",
      }));
    }
    if (cpassword === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        cpasswordErr: "Please Enter Confirm Password!",
      }));
    }
    if (cpassword !== password) {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        cpasswordErr: "Password and Confirm Password should be same!",
      }));
    }

    return formIsValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    validForm()
    navigate()
  };
  return (
    <form id="form" onSubmit={handleSubmit}>
      <h3>Change Password</h3>
      <input
        name="otp"
        placeholder="Enter Otp"
        value={otp}
        onChange={(e) => {
          setOtp(e.target.value);
        }}
      />
      {errorField.otpCodeErr.length > 0 && (
        <span className="error">{errorField.otpCodeErr}</span>
      )}
      <input
        type="password"
        name="password"
        placeholder="Enter New Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {errorField.passwordErr.length > 0 && (
        <span className="error">{errorField.passwordErr}</span>
      )}
      <input
        type="password"
        name="cpassword"
        placeholder="Confirm Password"
        value={cpassword}
        onChange={(e) => {
          setCpassword(e.target.value);
        }}
      />
      {errorField.cpasswordErr.length > 0 && (
        <span className="error">{errorField.cpasswordErr}</span>
      )}

      <div id="Btn" type="submit" onClick={handleSubmit}>
        Change Password
      </div>
      <Link id="Btn" to="/login">
        Back
      </Link>
    </form>
  );
}
