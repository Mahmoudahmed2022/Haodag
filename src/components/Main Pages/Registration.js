import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../Css/Registration.css";
function Registration() {
  const [formData, setFormData] = useState({
    // firstName: "",
    // lastName: "",
    name: "",
    email: "",
    password: "",
    verifyPassword: "",
    // address: "",
    nationalID: "",
    phone: "",
    gender: "",
    role: "Customer",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios.post("http://localhost:9001/products", formData).then((data) => {
      console.log(data);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
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
      <h2 className="h2AddHall">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="ContTwoDivInOneLine">
          {/* <div className="form-group-AddHall animated Width47">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="input-field-AddHall"
              id="firstName"
              name="firstName"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group-AddHall animated Width47">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="input-field-AddHall"
              id="lastName"
              name="lastName"
              required
              onChange={handleChange}
            />
          </div> */}
        </div>
        <div className="form-group-AddHall animated">
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            className="input-field-AddHall"
            id="userName"
            name="name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group-AddHall animated">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="input-field-AddHall"
            id="email"
            name="email"
            required
            onChange={handleChange}
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
              required
              onChange={handleChange}
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
              required
              onChange={handleChange}
            />
          </div>
          
        </div>

        {/* <div className="form-group-AddHall animated">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="input-field-AddHall"
            id="address"
            name="address"
            required
            onChange={handleChange}
          />
        </div> */}
        <div className="form-group-AddHall animated">
          <label htmlFor="nationalID">National ID</label>
          <input
            type="number"
            className="input-field-AddHall"
            id="nationalID"
            name="nationalID"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group-AddHall animated">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            className="input-field-AddHall"
            id="phone"
            name="phone"
            required
            onChange={handleChange}
          />
        </div>
        <div className="radio-buttons-AddHall animated">
          <label>Gender</label>
          <div>
            <label className="mr-3">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
        </div>
        <div className="form-group-AddHall animated">
          <label htmlFor="role">Choose a Role:</label>
          <select
            name="role"
            id="role"
            className="select-field-AddHall"
            onChange={handleChange}
          >
            <option checked value="">Choose a Role</option>
            <option value="Client">Client</option>
            <option value="Hall Owner">Hall Owner</option>
            <option value="Wedding Planner">Wedding Planner</option>
          </select>
        </div>
        <button type="submit" className="btnAddHall">
          Sign Up
        </button>
        <Link to="/" className="cancelBtnReg">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default Registration;
