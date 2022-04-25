import React, { useState } from "react";
import "./Common.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function SignUp(props) {
  const [credential, setCredential] = useState({ firstName:"",lastName:"",email: "", password: "",cpassword:"" });
  let navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const{firstName,lastName,email,password}=credential;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        name:`${firstName} ${lastName}`,email,password
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("Account Create Successfully","Success")
    } else {
      props.showAlert("invalid credentials","Danger")
    }
  };
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="formStyle d-flex flex-column align-items-center py-4">
        <Link to="/">
          <img id="logo" src={props.logo} alt="Blood Warriors" />
        </Link>
        <form id="form" onSubmit={handleLogin}>
          <input
            type="name"
            name="firstName"
            placeholder="First Name"
            onChange={onChange}
          />
          <input
            type="name"
            name="lastName"
            placeholder="Last Name"
            onChange={onChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={onChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={onChange}
          />

          <input
            type="password"
            name="cpassword"
            placeholder="Enter confirm password"
            onChange={onChange}
          />

          <Button id="Btn" type="submit">
            Sign Up
          </Button>
          <h6>Or Sign Up with</h6>
          <div className="d-flex mb-3 my-2">
            <img
              className="me-3 ms-3 assetIcons"
              src="/assets/facebookIcon.png"
              alt="Facebook"
              style={{ width: "40px", height: "40px" }}
            />
            <img
              className="me-3 ms-3 assetIcons"
              src="/assets/GoogleIcon.png"
              alt="Google"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="d-flex align-items-center mt-3">
            <h6 className="mb-0 me-1">Already have account?</h6>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
