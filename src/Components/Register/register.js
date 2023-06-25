import React, { useState } from "react";
import "./register.css";
import axios from "axios";

import "./register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    password: "",
    cpassword: "",
  });
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (user.password !== user.cpassword) {
        return alert("Password does not matched ");
      }

      const resp = await axios.post("/user", {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        contactNo: user.contactNo,
        password: user.password,
      });

      if (resp.data.success) console.log("Data is posted successively");
      alert("Form Submitted");
      navigate("/login");
      setuser({
        firstName: "",
        lastName: "",
        email: "",
        contactNo: "",
        password: "",
        cpassword: "",
      });
    } catch (error) {
      if (error.response.status === 422) return alert("Email already exist");
      console.log(error);
      console.log("Something went wrong");
    }
  };
  const inputevent = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    // you can also get placeholder by e.target.placeholder
    const { name, value } = e.target;
    setuser((prev) => {
      console.log(prev);
      return {
        ...prev,
      };
    });
  };

  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Registration</h1>
          <Link to="/login">
            <button type="button" className="white_btn">
              Sign in
            </button>
          </Link>
        </div>
        <div className="right">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={inputevent}
              value={user.firstName}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={inputevent}
              value={user.lastName}
              required
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={inputevent}
              required
              className="input"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="contactNo"
              onChange={inputevent}
              value={user.contactNo}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={inputevent}
              value={user.password}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
              onChange={inputevent}
              value={user.cpassword}
              required
              className="input"
            />
            {/* {error && <div className={error_msg}>{error}</div>} */}
            {/* <button type="submit" className="green_btn">
              Sign Up
            </button> */}
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
