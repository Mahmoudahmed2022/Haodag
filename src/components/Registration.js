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
              <label
                htmlFor="FirstName"
                className="FirstName-label registration-label"
              >
                <FaUserAlt className="svg-registrer" />
                &nbsp;First Name
              </label>
              <input
                type="text"
                className="FirstName-input"
                id="FirstName registration-input"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label
                htmlFor="LastName"
                id="form-label"
                className="LastName-label registration-label"
              >
                <FaUserAlt className="svg-registrer" />
                &nbsp;Last Name
              </label>
              <input
                type="text"
                className="LastName-input registration-input"
                id="LastName"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="email-label registration-label"
              >
                <MdEmail className="svg-registrer" />
                &nbsp;Email Address
              </label>
              <input
                type="email"
                className="email-input registration-input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="userName"
                className="userName-label registration-label"
              >
                <FaUserCircle className="svg-registrer" />
                &nbsp;User Name
              </label>
              <input
                type="text"
                className="userName-input registration-input"
                id="userName"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="password-1-label registration-label"
              >
                <FaUserLock className="svg-registrer" />
                &nbsp;Password
              </label>
              <input
                type="password"
                className="password-1-input registration-input"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="password"
                className="password-2-label registration-label"
              >
                <RiRotateLockFill className="svg-registrer" />
                &nbsp;Verify Password
              </label>
              <input
                type="password"
                className="password-2-input registration-input"
                id="verify-password"
                required
                onChange={(e) => setVerifyPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="Address"
                className="Address-label registration-label"
              >
                <IoHome className="svg-registrer" />
                &nbsp;Address
              </label>
              <input
                type="text"
                className="Address-input registration-input"
                id="Address"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="NationalID"
                className="NationalID-label registration-label"
              >
                <FaAddressCard className="svg-registrer" />
                &nbsp;National ID
              </label>
              <input
                type="number"
                className="NationalID-input registration-input"
                id="NationalID"
                required
                onChange={(e) => setNationalID(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="phone-label registration-label">
                <FaPhoneAlt className="svg-registrer" />
                &nbsp;Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="phone-input registration-input"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3 gender">
              <label className="male-label checkoption registration-label">
                <FaMale className="svg-registrer" />
                &nbsp;Male
              </label>
              <input
                type="checkbox"
                className="male-input registration-input"
                checked={gendercheck === "male"}
                onChange={() => {
                  setGendercheck("male");
                  setGender("male");
                }}
              />
              <span className="checkmark"></span>

              <label className="female-label checkoption registration-label">
                <FaFemale className="svg-registrer" />
                &nbsp;Female
                <input
                  type="checkbox"
                  className="female-input registration-input"
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
              <label htmlFor="role" className="role-label registration-label">
                <IoIdCard className="svg-registrer" />
                Choose a Role:
              </label>
              <select
                name="Role"
                id="role"
                className="role-select registration-select"
              >
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
