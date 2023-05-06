import { FaLock } from "@react-icons/all-files/fa/FaLock";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Css/Login.css";

function Login() {
  // let body = document.getElementsByTagName("body");
  // body.setAttribute("class", "login-body");
  const [userToken, setUserToken] = useState("");
  const [person, setPerson] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState(null);

  const getLoginData = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const api = "http://127.0.0.1:8000/api/auth/switchLogin";
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoginData(data.data);
        console.log(loginData);
        if (loginData?.message) {
          alert(loginData?.message);
        } else {
          if (loginData?.owner) {
            setPerson(loginData?.owner);
          } else if (loginData?.user) {
            setPerson(loginData?.user);
          } else if (loginData?.planner) {
            setPerson(loginData?.planner);
          }
          setUserToken(person?.api_token);
          // console.log(loginData);
          // console.log(person);
        }
      });
  };

  /////////////////////////////////////*

  // axios.post(api, formData).then((data) => {
  //   setLoginData(data.data);
  //   if (loginData?.message) {
  //     alert(loginData?.message);
  //   } else {
  //     if (loginData?.owner) {
  //       setPerson(loginData?.owner);
  //     } else if (loginData?.user) {
  //       setPerson(loginData?.user);
  //     } else if (loginData?.planner) {
  //       setPerson(loginData?.planner);
  //     }
  //     setUserToken(person?.api_token);
  //     console.log(loginData);
  //     console.log(person);
  //   }
  // });
  /////////////////////////////////////
  // useEffect(() => {
  //   if (loginData) {
  //     // navigate(`/`, { state: { data: loginData } });
  //   }
  // }, [loginData]);
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
            <button className="login-submit submit">
              <span className="s-span"></span>
              <span className="s-span"></span>
              <span className="s-span"></span>
              <span className="s-span"></span>
              Submit
            </button>
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
