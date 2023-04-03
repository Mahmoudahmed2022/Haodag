import React from "react";
import "../Css/Login.css";
import { FaLock } from "@react-icons/all-files/fa/FaLock";
import axios from "axios";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  // let body = document.getElementsByTagName("body");
  // body.setAttribute("class", "login-body");

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
    <div className="cont">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="user-box">
            <FaUserAlt className="svg1" />
            <input
              type="email"
              name=""
              className="email-input e-p-input"
              required=""
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="e-p-label">Email</label>
          </div>
          <div className="user-box">
            <FaLock className="svg1" />
            <input
              type="password"
              name=""
              required=""
              className="password-input e-p-input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="e-p-label">Password</label>
          </div>
          <div className="divsubmitnewvisitor">
            <Link className="login-submit submit" to="/profile">
              <span className="s-span"></span>
              <span className="s-span"></span>
              <span className="s-span"></span>
              <span className="s-span"></span>
              Submit
            </Link>
            <a className="register" href="#">
              new visitor
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
