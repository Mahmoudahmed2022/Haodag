import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../Css/Registration.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [userToken, setUserToken] = useState(null);
  const navigate = useNavigate();

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
    photo: null,
  });
  // localhost:8000/api/auth/switchRegister
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      .post("http://127.0.0.1:8000/api/auth/switchRegister", formData)
      .then((data) => {
        console.log(data);
      });
  };
  console.log(formData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // async function uploadFile(file) {
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   return fetch('http://localhost:9000/products', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     console.log(file);

  //     setPhoto(file);
  //     return data; // You can return the response data if you want to use it somewhere else
  //   })
  //   .catch(error => {
  //     console.error(error);
  //     throw error; // You can throw the error if you want to handle it somewhere else
  //   });
  // }

  //   function uploadClinicPhoto(e){
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append('file', photo, photo);

  // setPhoto(formData)
  //     console.log(formData)

  //     }

  console.log(formData);
  console.log(formData);
  function sendRegisterData(e) {
    e.preventDefault();
    if (formData.password === verifyPassword) {
      fetch("http://127.0.0.1:8000/api/auth/switchRegister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => setUserToken(data));
    } else {
      alert("Password and Confirm Password Does not Match");
    }
  }

  useEffect(() => {
    if (userToken) {
      navigate("/", { state: { data: userToken } });
    }
  }, [userToken]);

  // console.log(verifyPassword + "vreify");
  // console.log(userToken);

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
      <form onSubmit={sendRegisterData}>
        <div className="ContTwoDivInOneLine"></div>
        <div className="form-group-AddHall animated">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="input-field-AddHall"
            id="name"
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
              onChange={(e) => {
                setVerifyPassword(e.target.value);
              }}
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
        {/* <div className="form-group-AddHall animated">
          <label htmlFor="nationalID">National ID</label>
          <input
            type="number"
            className="input-field-AddHall"
            id="nationalID"
            name="nationalID"
            required
            onChange={handleChange}
          />
        </div> */}
        <div className="form-group-AddHall animated">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            className="input-field-AddHall"
            id="country"
            name="country"
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
        <div className="form-group-AddHall animated">
          <label htmlFor="religion">Religion</label>
          <input
            type="tel"
            className="input-field-AddHall"
            id="religion"
            name="religion"
            required
            onChange={handleChange}
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
          {/* <input type="file" name="photo" onChange={(e)=>{setPhoto(e.target.files[0])}} /> */}
          <input
            type="file"
            name="photo"
            // onChange={uploadFile}
            onChange={(e) => {
              setFormData((prev) => {
                return {
                  ...prev,
                  photo: e.target.files[0],
                };
              });
            }}
          />
        </div>
        <div className="form-group-AddHall animated">
          <label htmlFor="role">Choose a Role:</label>
          <select
            name="role"
            id="role"
            className="select-field-AddHall"
            onChange={handleChange}
          >
            <option checked value="">
              Choose a Role
            </option>
            <option value="user">Client</option>
            <option value="hallowner">Hall Owner</option>
            <option value="planner">Wedding Planner</option>
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
