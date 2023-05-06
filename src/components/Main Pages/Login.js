import { FaLock } from "@react-icons/all-files/fa/FaLock";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Css/Login.css";

function Login() {
  // let body = document.getElementsByTagName("body");
  // body.setAttribute("class", "login-body");
  const navigate = useNavigate()
const [formData,setFormData] = useState({
  email:"",
  password:""
})
const [loginData,setLoginData]=useState(null);

const getLoginData = (e)=>{
  setFormData(prev=>{
    return {
      ...prev,
      [e.target.name]:e.target.value
    }
  })

}
console.log(formData);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://fakestoreapi.com/products", formData)
      .then((data) => {
        setLoginData(data);
      });
  };
  useEffect(()=>{
    if(loginData){
      navigate(`/`, { state: { data: loginData } });
    }
  },[loginData])
  return (
    <div className="cont">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="user-box">
            <FaUserAlt className="svg1" />
            <input
              type="email"
              name="email"
              className="email-input e-p-input"
              required=""
              onChange={getLoginData}
            />

            <label className="e-p-label">Email</label>
          </div>
          <div className="user-box">
            <FaLock className="svg1" />
            <input
              type="password"
              name="password"
              required=""
              className="password-input e-p-input"
              onChange={getLoginData}
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
            <Link className="register" to="/registration">
              new visitor
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
