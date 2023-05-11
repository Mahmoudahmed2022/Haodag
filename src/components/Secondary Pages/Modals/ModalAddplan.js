import React, { useState } from "react";
import "../../../Css/Modal.css";
import { useLocation, useNavigate } from "react-router-dom";

const ModalAddplan = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [hallImage, setHallImage] = useState(null);
  // const [userToken, setUserToken] = useState(null);
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [verifyPassword, setVerifyPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const location = useLocation();
  const userToken=location?.state?.data;
  const token=location?.state?.token;

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    photos: [],
    
  });
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // do something with form data here, e.g. send it to a server
  //   console.log({ name, price, phone, description });
  //   setName("");
  //   setPrice("");
  //   setDescription("");
  //   props.onClose();
  // };
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
console.log(userToken)
console.log(token)

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("price", formData.email);
    formDataObj.append("description", formData.password);
    formDataObj.append("photo", formData.photo);
    fetch("http://127.0.0.1:8000/planner/addPlan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer${token}`,
        "auth-token":`${token}`
      },
      body: formDataObj,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // setUserToken(data.data);
        setStatus(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
