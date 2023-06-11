import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Css/Modal.css";
import { useContext } from "react";
import { MyContext } from "../../Main Pages/Redux";
import NavbarWithSideBar from "../../Main Pages/NavbarWithSideBar";

const ModalEditClientProfile = () => {
  const [formData, setFormData] = useState({});
  let navigate = useNavigate();
  const personData = useContext(MyContext);
  const getLoginData = (e) => {
    const { name, value, files } = e.target;
  
    if (name === "photo") {
      setFormData((prev) => ({
        ...prev,
        photo: files[0], // Set the selected file as the photo
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  console.log(formData);
  console.log(personData);
  const onSubmitted = (e) => {
    e.preventDefault();
    
    const formDataObj = new FormData();
  
    // Append form fields excluding the photo
    for (const [key, value] of Object.entries(formData)) {
      if (key !== "photo") {
        formDataObj.append(key, value);
      }
    }
  
    // Append the updated photo if available
    if (formData.photo) {
      formDataObj.append("photo", formData.photo);
    }
    
    fetch(
      `http://127.0.0.1:8000/${personData.role}/auth/update${
        personData.role.charAt(0).toUpperCase() + personData.role.slice(1)
      }/${personData.id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${personData.token}`,
          "auth-token": `${personData.token}`,
        },
        body: formDataObj,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.name);
        personData.name = data.data.name;
        personData.phone = data.data.phone;
        personData.password = data.data.password;
        personData.photo = data.data.photo;
  
        console.log(data);
        navigate(`/user/${personData.role}/${personData.id}`);
        window.location.reload();
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
    <NavbarWithSideBar/>
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
              defaultValue={personData?.name}
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
              defaultValue={personData?.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              photo
            </label>
            <input
              onChange={getLoginData}
              type="file"
              className="form-control"
              id="photo"
              name="photo"

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
              defaultValue={personData?.phone}
            />
          </div>

          <div className=" DivbtnModal">
            <button type="submit" className="details buttonMain">
              Edit Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalEditClientProfile;
