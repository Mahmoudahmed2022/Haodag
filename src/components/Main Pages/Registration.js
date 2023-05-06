import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../Css/Registration.css";
import { useEffect } from "react";
function Registration() {
  const [userToken,setUserToken] = useState(null);
  const [verifyPassword,setVerifyPassword] = useState('');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country:"",
    phone: "",
    gender: "",
    religion: "",
    role: "",
    photo:"",
  });
  // localhost:8000/api/auth/switchRegister
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios.post("localhost:8000/api/auth/switchRegister", formData).then((data) => {
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
  // const handleFileSelect = (event) => {
  //   const file = event.target.files[0];
  //   setFormData(prevFormData => ({
  //     ...prevFormData,
  //     photo: file
  //   }));
  // }
  // // const handleFileSelect = (event) => {
  // //   setFormData.photo(event.target.files[0]);
  // // }

  function sendRegisterData(e){
    e.preventDefault();
    if(formData.password===verifyPassword){
    fetch("localhost:8000/api/auth/switchRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        formData
      ),
    })
    .then((response) => response.json())
    .then(data=>console.log(data));
  }else{
    alert('Password and Confirm Password Does not Match')
  }
  }

// useEffect(()=>{
//   if(userToken){
//     navigate('/',{state:{data:userToken}})
//   }
// },[userToken])



console.log(verifyPassword+"vreify")
console.log(formData.password)


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
              onChange={(e)=>{setVerifyPassword(e.target.value)}}
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
        {/* <div>
      <input type="file" name="photo" onChange={handleFileSelect} />
      
    </div> */}
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
