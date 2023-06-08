import { FaLock } from "@react-icons/all-files/fa/FaLock";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Css/Login.css";
import Loader from "../images/loader.gif";
import NavbarWithSideBar from "./NavbarWithSideBar";
import { useContext } from "react";
import { MyContext } from "./Redux";
function Login({ onLogin }) {
  const personData = useContext(MyContext);

  console.log(personData);

  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [adminData, setAdminData] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const getLoginData = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    setLoad(true);

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
      .then((data) => {
        if (data) {
          personData.setIsLogin(true);
          // personData.setIsLogout(false);
          personData.setName(data.data.name);
          personData.setEmail(data.data.email);
          personData.setRole(data.data.role);
          personData.setToken(data.data.token);
          personData.setCountry(data.data.country);
          personData.setGender(data.data.gender);
          personData.setPhone(data.data.phone);
          personData.setPhoto(data.data.photo);
          personData.setReligion(data.data.religion);
          personData.setId(data.data.id);
          // if (personData.role === "admin") {
          //   navigate(`/adminDashboard`);
          // }
        } else {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    if (personData.role === "planner") {
      navigate(`/`);
    } else if (personData.role === "owner") {
      navigate(`/`);
    } else if (personData.role === "user") {
      navigate(`/`);
    } else if (personData.role === "admin") {
      navigate(`/adminDashboard`);
    }else if (personData.role === "supplier") {
      navigate(`/`);
    }
  }, [personData]);
  if (load) {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <img src={Loader} />
      </div>
    );
  }

  return (
    <>
      <NavbarWithSideBar />
      <div className="cont">
        <div className="login-box">
          <h2 className="login-title">Login</h2>
          <form className="login-form">
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
              <button className="login-submit submit" onClick={handleSubmit}>
                <span className="s-span"></span>
                <span className="s-span"></span>
                <span className="s-span"></span>
                <span className="s-span"></span>
                Submit
              </button>
              <Link to="/registration" className="register">
                new visitor
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
