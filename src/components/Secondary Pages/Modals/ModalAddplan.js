import React, { useState } from "react";
import "../../../Css/Modal.css";
import { useNavigate } from "react-router-dom";

const ModalAddplan = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [hallImage, setHallImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with form data here, e.g. send it to a server
    console.log({ name, price, phone, description });
    setName("");
    setPrice("");
    setDescription("");
    props.onClose();
  };
  const handleImageChange = (e) => {
    const files = e.target.files;
    const images = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        images.push(e.target.result);
        // Update state or perform any other operation with the image data
      };

      reader.readAsDataURL(file);
    }
    setHallImage(images);
    console.log(images);
  };

  const reset = () => {
    setName("");
    setPrice("");
    setDescription("");
  };
  const [userToken, setUserToken] = useState(null);
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);

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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formDataObj = new FormData();
  //   formDataObj.append("name", formData.name);
  //   formDataObj.append("email", formData.email);
  //   formDataObj.append("password", formData.password);
  //   formDataObj.append("country", formData.country);
  //   formDataObj.append("phone", formData.phone);
  //   formDataObj.append("gender", formData.gender);
  //   formDataObj.append("religion", formData.religion);
  //   formDataObj.append("role", formData.role);
  //   formDataObj.append("photo", formData.photo);
  //   if (formData.password === verifyPassword){
  //   fetch("http://127.0.0.1:8000/api/auth/switchRegister", {
  //     method: "POST",
  //     body: formDataObj,
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUserToken(data.data);
  //       setStatus(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });}
  //     else{alert("Password and Confirm Password Does not Match");}
  // };
console.log(userToken);
console.log(status);

  if (!props.show) {
    return null;
  }
  return (
    <>
      <div className="modal-overlay">
        <div className="modal1">
          <div className="exit">
            <button className="buttonExit" onClick={() => props.onClose()}>
              X
            </button>
          </div>
          <h2 className="headContact">Add Plan</h2>

          <form className="formAddPlan" onSubmit={handleSubmit}>
            <label htmlFor="name">Plan Name:</label>
            <input
              className="inputPlanData"
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <label htmlFor="price">Price:</label>
            <input
              className="inputPlanData"
              type="number"
              id="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
            />

            <label htmlFor="description">Description:</label>
            <textarea
              className="inputPlanData"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
            <label htmlFor="hallImage">Choose Your Plan Images:</label>
            <input
              className="chooseImages"
              type="file"
              id="hallImage"
              onChange={handleImageChange}
              accept="image/*"
              multiple
              required
            />
            <div>
              <div className="resetAndCancel">
                <button className="cancel" onClick={() => props.onClose()}>
                  Cancel
                </button>
                <button className="submitForm" type="submit">
                  Add Plan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalAddplan;
