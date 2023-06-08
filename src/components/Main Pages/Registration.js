import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../Css/Registration.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Redux";
import eye from "../images/eye.png";
import NavbarWithSideBar from "./NavbarWithSideBar.js";
import { FaEye } from "react-icons/fa";
function Registration() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const personData = useContext(MyContext);
  const [verifyPassword, setVerifyPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    phone: "",
    gender: "",
    religion: "",
    role: "",
    photo: "",
    type: "",
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
const goToHome=()=>{
  navigate(`/`);
}
  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("password", formData.password);
    formDataObj.append("country", formData.country);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("gender", formData.gender);
    formDataObj.append("religion", formData.religion);
    formDataObj.append("role", formData.role);
    formDataObj.append("photo", formData.photo);

    if (formData.password === verifyPassword) {
      fetch("http://127.0.0.1:8000/api/auth/switchRegister", {
        method: "POST",
        body: formDataObj,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          personData.setIsLogin(true);
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
          navigate(`/`)
          setStatus(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Password and Confirm Password Does not Match");
    }
  };
  console.log("personData", personData);
  console.log("status", status);

  useEffect(() => {
    // if (personData) {
    //   // navigate("/hallform", { state: { data: personData } });
    //   navigate(`/:${personData.role}/${personData.id}`);
    // }

    if (status?.message === "User successfully registered") {
      alert(status?.message);
      navigate("/");
    } else if (status?.msg) {
      alert(status?.msg);
      navigate("/login");
    }
  }, [personData, status]);

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
    <>
    <NavbarWithSideBar/>
    <div className="containerAddHall">
      <h2 className="h2AddHall">Sign Up</h2>
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
                 <FaEye/>
               
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
                <FaEye/>
               {/* <img src={eye}></img> */}
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
          <label htmlFor="country">Country</label>
          <input
            type="text"
            className="input-field-AddHall"
            id="country"
            name="country"
            value={formData.country}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group-AddHall animated">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            className="input-field-AddHall"
            id="phone"
            name="phone"
            value={formData.phone}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group-AddHall animated">
          <label htmlFor="religion">Religion</label>
          <input
            type="tel"
            className="input-field-AddHall"
            id="religion"
            name="religion"
            value={formData.religion}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group-AddHall animated">
          <label>Gender</label>
          <div>
            <label className="mr-3">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleInputChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleInputChange}
              />{" "}
              Female
            </label>
          </div>
        </div>
        <div className="form-group-AddHall animated colorC">
          <input
            type="file"
            name="photo"
            className="input-field-AddHall"
            onChange={handlePhotoChange}
          />
        </div>
        <div className="form-group-AddHall animated">
          <label htmlFor="role">Choose a Role:</label>
          <select
            name="role"
            id="role"
            value={formData.role}
            className="select-field-AddHall"
            onChange={handleInputChange}
          >
            <option checked value="">
              Choose a Role
            </option>
            <option value="user">Client</option>
            <option value="hallowner">Hall Owner</option>
            <option value="planner">Wedding Planner</option>{" "}
            <option value="supplier">Supplier</option>
          </select>
        </div>

        <button type="submit" className="btnAddHall">
          Sign Up
        </button>
        <button onClick={goToHome} className="cancelBtnReg">
          Cancel
        </button>
      </form>
    </div>
    </>
  );
}

export default Registration;
