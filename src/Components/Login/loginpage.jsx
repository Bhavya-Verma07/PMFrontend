import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Loginpage = () => {
  const navigate = useNavigate();
 
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const resp = await axios.post("/signin", {
        email: email,
        password: password,
      });
      if (resp.data.success === true) alert("logged in successfully");
      console.log(email + " " + password);
      setemail("");
      setpassword("");
      navigate("/");
      // getUser();
    } catch (error) {
      if (error.response.status === 400) alert("Invalid credential");
      console.log(error);
    }
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="left">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <label>
              Username or email address<span>*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              // onChange={handleChange}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
              required
              className="input"
            />
            <label>
              Password<span>*</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              value={password}
              required
              className="input"
            />
            {/* {error && <div className={error_msg}>{error}</div>} */}
            <button type="submit" className="green_btn">
              Sign In
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Here ?</h1>
          <Link to="/register">
            <button type="button" className="white_btn">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
