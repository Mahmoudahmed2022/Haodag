import React from "react";
import "../Css/login2.css";
import { FaLock } from "@react-icons/all-files/fa/FaLock";

import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";

function Login2() {
  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
             <FaUserAlt className="svg1" />
            <input type="text" name="" required="" />
           
            <label>Email</label>
          </div>
          <div className="user-box">
          <FaLock className="svg1"/>
            <input type="password" name="" required="" />
            <label>Password</label>
            
          </div>

          <a className="submit" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
          <a className="register" href="#">new visitor</a>
        </form>
      </div>
    </>
  );
}
export default Login2;
