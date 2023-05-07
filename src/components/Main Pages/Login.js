import { FaLock } from "@react-icons/all-files/fa/FaLock";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Css/Login.css";
import { message } from "antd";

function Login() {
  // let body = document.getElementsByTagName("body");
  // body.setAttribute("class", "login-body");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [userToken, setUserToken] = useState(null);

  const getLoginData = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  // console.log(formData);
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   fetch("http://127.0.0.1:8000/api/auth/switchLogin", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),

  //     })
  //       .then((response) => response.json())
  //       .then((data) => setUserToken(data));

  //   }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/api/auth/switchLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          return response.json();
        } else alert("email or password doesnt exist");
      })

      .then((data) => setUserToken(data))
      .catch((error) => {
        console.error(error.message);
        // display the error message to the user using an alert or some other method
      });
  };

  // axios
  //   .post("http://127.0.0.1:8000/api/auth/switchLogin", formData)
  //   .then((data) => {
  //     setUserToken(data);

  //   });

  console.log(userToken);
  // const handleSubmit1 = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("localhost:8000/api/auth/logout", formData)
  //     .then((data) => {
  //       setLoginData(data);
  //       console.log(loginData)
  //     });
  // };
  useEffect(() => {
    if (userToken) {
      navigate("/", { state: { data: userToken } });
    }
  }, [userToken]);

  const [isLoggedOut, setIsLoggedOut] = useState(false);

  function handleLogout() {
    fetch("http://127.0.0.1:8000/api/auth/logout", {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          setIsLoggedOut(true);
        } else {
          throw new Error("Logout failed.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    if (isLoggedOut) {
      alert("You Logged out");
      navigate("/login");
    }
  }, [isLoggedOut]);

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
              required
              onChange={getLoginData}
            />

            <label className="e-p-label">Email</label>
          </div>
          <div className="user-box">
            <FaLock className="svg1" />
            <input
              type="password"
              name="password"
              required
              className="password-input e-p-input"
              onChange={getLoginData}
            />
            <label className="e-p-label">Password</label>
          </div>
          <div className="divsubmitnewvisitor">
            <button className="login-submit submit" to="/profile">
              <span className="s-span"></span>
              <span className="s-span"></span>
              <span className="s-span"></span>
              <span className="s-span"></span>
              Submit
            </button>
            <button onClick={handleLogout}>Logout</button>
            {/* <button onClick={handleSubmit1} className="register" >
              new visitor
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
