import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../Css/Registration.css";

function AddAdmin() {
  const location = useLocation();
  const userToken = location?.state?.data;
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);

  const [verifyPassword, setVerifyPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhotoChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      photo: event.target.files[0],
    }));
  };
  function goDashboard() {
    navigate(`/AdminDashboard`, { state: { data: userToken } });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("password", formData.password);
    formDataObj.append("photo", formData.photo);

    if (formData.password === verifyPassword) {
      fetch("http://127.0.0.1:8000/admin/auth/addAdmin", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken.token}`,
          "auth-token": `${userToken.token}`,
        },
        body: formDataObj,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setStatus(data);
          alert(data.message);
          navigate(`/AdminDashboard`, { state: { data: userToken } });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Password and Confirm Password Does not Match");
    }
  };
  console.log("status", status);

  function togglePasswordVisibility() {
    var passwordField = document.getElementById("verifyPassword");
    console.log(passwordField, "Input");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }
  function togglePasswordVisibility1() {
    var passwordField = document.getElementById("password");
    console.log(passwordField, "Input");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }
  return (
    <div className="containerAddHall">
      <h2 className="h2AddHall">Add Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="ContTwoDivInOneLine"></div>
        <div className="form-group-AddHall animated">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="input-field-AddHall"
            id="name"
            name="name"
            value={formData.name}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group-AddHall animated">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="input-field-AddHall"
            id="email"
            name="email"
            value={formData.email}
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="ContTwoDivInOneLine">
          <div className="form-group-AddHall animated Width47 password-wrapper">
            <div className="COntLableHide">
              {" "}
              <label htmlFor="password">Password</label>{" "}
              <span
                className="toggle-password animated marginBottomLeft"
                onClick={togglePasswordVisibility1}
              >
                Hide/Appear
              </span>
            </div>
            <input
              type="password"
              className="input-field-AddHall"
              id="password"
              name="password"
              value={formData.password}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group-AddHall animated Width47 password-wrapper">
            <div className="COntLableHide">
              {" "}
              <label htmlFor="password">Verify Password</label>{" "}
              <span
                className="toggle-password animated marginBottomLeft"
                onClick={togglePasswordVisibility}
              >
                Hide/Appear
              </span>
            </div>
            <input
              type="password"
              className="input-field-AddHall"
              id="verifyPassword"
              name="verifyPassword"
              value={formData.verifyPassword}
              required
              onChange={(e) => {
                setVerifyPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-group-AddHall animated">
          <input
            type="file"
            name="photo"
            className="input-field-AddHall"
            onChange={handlePhotoChange}
          />
        </div>

        <button type="submit" className="btnAddHall">
          Sign Up
        </button>
        <button onClick={goDashboard} className="cancelBtnReg">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddAdmin;
