import "../Css/Registration.css";
import "../Css/App.css";

import { FaUserLock } from "@react-icons/all-files/fa/FaUserLock";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { RiRotateLockFill } from "react-icons/ri";
import { FaMale } from "@react-icons/all-files/fa/FaMale";
import { FaFemale } from "@react-icons/all-files/fa/FaFemale";
import { IoHome, IoIdCard } from "react-icons/io5";
import { FaAddressCard } from "@react-icons/all-files/fa/FaAddressCard";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import axios from "axios";
import { useState } from "react";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [role, setRole] = useState("Customer");
  const [gendercheck, setGendercheck] = useState("male");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      userName,
      password,
      verifyPassword,
      Address,
      nationalID,
      phone,
      gender,
      role
    );
    axios
      .post("https://fakestoreapi.com/products", {
        firstName,
        lastName,
        userName,
        email,
        password,
        verifyPassword,
        Address,
        nationalID,
        phone,
        gender,
        role,
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <div className="big-container">
        <h2 className="title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="sml-container">
            <div className="mb-3">
              <label htmlFor="FirstName" className="FirstName-label">
                <FaUserAlt />
                &nbsp;First Name
              </label>
              <input
                type="text"
                className="FirstName-input"
                id="FirstName"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label
                htmlFor="LastName"
                id="form-label"
                className="LastName-label"
              >
                <FaUserAlt />
                &nbsp;Last Name
              </label>
              <input
                type="text"
                className="LastName-input"
                id="LastName"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="email-label">
                <MdEmail />
                &nbsp;Email Address
              </label>
              <input
                type="email"
                className="email-input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userName" className="userName-label">
                <FaUserCircle />
                &nbsp;User Name
              </label>
              <input
                type="text"
                className="userName-input"
                id="userName"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="password-1-label">
                <FaUserLock />
                &nbsp;Password
              </label>
              <input
                type="password"
                className="password-1-input"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password" className="password-2-label">
                <RiRotateLockFill />
                &nbsp;Verify Password
              </label>
              <input
                type="password"
                className="password-2-input"
                id="verify-password"
                required
                onChange={(e) => setVerifyPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Address" className="Address-label">
                <IoHome />
                &nbsp;Address
              </label>
              <input
                type="text"
                className="Address-input"
                id="Address"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="NationalID" className="NationalID-label">
                <FaAddressCard />
                &nbsp;National ID
              </label>
              <input
                type="number"
                className="NationalID-input"
                id="NationalID"
                required
                onChange={(e) => setNationalID(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="phone-label">
                <FaPhoneAlt />
                &nbsp;Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="phone-input"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3 gender">
              <label className="male-label checkoption">
                <FaMale />
                &nbsp;Male
              </label>
              <input
                type="checkbox"
                className="male-input"
                checked={gendercheck === "male"}
                onChange={() => {
                  setGendercheck("male");
                  setGender("male");
                }}
              />
              <span className="checkmark"></span>

              <label className="female-label checkoption">
                <FaFemale />
                &nbsp;Female
                <input
                  type="checkbox"
                  className="female-input"
                  checked={gendercheck === "female"}
                  onChange={() => {
                    setGendercheck("female");
                    setGender("female");
                  }}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="mb-3 role">
              <label htmlFor="role" className="role-label">
                <IoIdCard />
                Choose a Role:
              </label>
              <select name="Role" id="role" className="role-select">
                <option
                  value="Customer"
                  onChange={(e) => setFirstName(e.target.value)}
                >
                  Customer
                </option>
                <option
                  value="Hall Owner"
                  onChange={(e) => setFirstName(e.target.value)}
                >
                  Hall Owner
                </option>
                <option
                  value="Wedding Planner"
                  onChange={(e) => setFirstName(e.target.value)}
                >
                  Wedding Planner
                </option>
              </select>
            </div>
            <div className="mb-3 form-check btn-cont">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
