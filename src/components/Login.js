import React from "react";
import "../Css/login.css";
import { FaLock } from "@react-icons/all-files/fa/FaLock";
import axios from "axios";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { useState } from "react";
import NavbarWithSideBar from "./NavbarWithSideBar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    console.log(email, password);
    event.preventDefault();
    axios
      .post("https://fakestoreapi.com/products", { email, password })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <NavbarWithSideBar />
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <FaUserAlt className="svg1" />
            <input
              type="email"
              name=""
              required=""
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Email</label>
          </div>
          <div className="user-box">
            <FaLock className="svg1" />
            <input
              type="password"
              name=""
              required=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <button className="submit" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
          <a className="register" href="#">
            new visitor
          </a>
        </form>
      </div>
    </>
  );
}
export default Login;
