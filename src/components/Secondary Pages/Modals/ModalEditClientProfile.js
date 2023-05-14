import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../../../Css/Modal.css";

const ModalEditClientProfile = () => {
  const [formData, setFormData] = useState({});
  
  const params = useParams();
  let navigate = useNavigate();
  const location = useLocation();
  const userToken = location?.state?.data;

  // const handleImageChange = (e) => {
  //   const files = e.target.files;
  //   const images = [];

  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //       images.push(e.target.result);
  //       // Update state or perform any other operation with the image data
  //     };

  //     reader.readAsDataURL(file);
  //   }
  //   setHallImage(images);
  //   console.log(images);
  // };

  function getLoginData(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  // function ResetLoginData(event) {
  //   event.preventDefault();
  //   setFormData((prevFormData) => {
  //     return {
  //       prevFormData: (event.target.value = ""),
  //     };
  //   });
  // }

  const reset = () => {
    setFormData([])
  };

  console.log(formData);
  console.log(userToken);
  const onSubmitted = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/${userToken.role}/auth/update${userToken.role.charAt(0).toUpperCase() + userToken.role.slice(1)}/${userToken.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken.token}`,
        "auth-token": `${userToken.token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.name);
        userToken.name=data.data.name
        userToken.phone=data.data.phone
        userToken.password=data.data.password

        navigate(`/${userToken.role}/${userToken.id}`, {state: { data: userToken }})
      })
      .catch((error) => {
        console.error(error);
      });
      
  };

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
      <div className="modal-container">
        <h1 className="modal-title">Edit Profile</h1>
        <form onSubmit={onSubmitted} className="form-container">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              onChange={getLoginData}
              type="text"
              className="form-control"
              id="name"
              name="name"
              defaultValue={userToken?.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={getLoginData}
              type="email"
              className="form-control"
              id="email"
              name="email"
              defaultValue={userToken?.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Password
            </label>
            <span
                className="toggle-password animated marginBottomLeft"
                onClick={togglePasswordVisibility1}
              >
                show
              </span>
            <input
              onChange={getLoginData}
              type="password"
              className="form-control"
              id="password"
              name="password"
              // defaultValue={userToken?.password}

              placeholder="Enter New Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              onChange={getLoginData}
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              defaultValue={userToken?.phone}
            />
          </div>
          
          <div className=" DivbtnModal">
            <button type="submit" className="form-btn btnModal">
              Edit Profile
            </button>
            {/* <button className="form-btn btnModal" onClick={ResetLoginData}>
              Reset
            </button> */}
          </div>
        </form>
      </div>

      {/* </div>
      </div> */}
    </>
  );
};

export default ModalEditClientProfile;
