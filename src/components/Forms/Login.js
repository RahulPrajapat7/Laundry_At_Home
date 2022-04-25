import React, { useState } from "react";
import "./Common.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";

function Login(props) {
  const [credential, setCredential] = useState({ email: "", password: "" });
  let navigate=useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //redirect
      localStorage.setItem('token',json.authToken);
       navigate('/')
       props.showAlert("LogedIn Successfully","Success")
    } else {
      props.showAlert("invalid Details","Danger")
    }
  };
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const googleSuccess = (res) => {
    const result = res?.profileObj;
    console.log(result); 
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google login failed.");
  };

  return (
    <>
      <div className="formStyle d-flex flex-column align-items-center py-4">
        <Link to="/">
          <img id="logo" src={props.logo} alt="Online Laundary" />
        </Link>
        <form id="form" onSubmit={handleLogin}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={credential.email}
            onChange={onChange}
          />

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={credential.password}
            onChange={onChange}
          />

          <Button id="Btn" type="submit">
            Login
          </Button>
          <Link
            className="m-1 ms-auto"
            style={{ fontSize: "16px" }}
            to="/forgot_password"
          >
            Forgot Password?
          </Link>
          <h6>Or Login with</h6>
          <div className="d-flex mb-3 my-2">
            <img
              className="me-3 ms-3 assetIcons"
              src="/assets/facebookIcon.png"
              alt="Facebook"
              style={{ width: "40px", height: "40px" }}
            />
            <GoogleLogin
              clientId="1001675013756-kevedl958lsvalrvhl6d0hok5sum8uc7.apps.googleusercontent.com"
              render={(renderprops)=>(
                <img
                  className="me-3 ms-3 assetIcons"
                  src="/assets/GoogleIcon.png"
                  alt="Google"
                  style={{ width: "40px", height: "40px" }}
                  onClick={renderprops.onClick}
                />
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <div className="d-flex align-items-center mt-3">
            <h6 className="mb-0 me-1">Don't have account?</h6>
            <Link to="/signup">Register</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
