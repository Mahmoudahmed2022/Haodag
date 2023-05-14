import React, { useState } from "react";
import "../../../Css/Modal.css";
import { useLocation, useNavigate } from "react-router-dom";

const ModalAddplan = (props) => {
  const [hallImages, setHallImages] = useState([]);
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);

  const location = useLocation();
  const userToken = location?.state?.data;
  const token = location?.state?.token;

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    address:"",
    city:"",
    country:""
  });

  const handleImageChange = (e) => {
    const files = e.target.files;
    const images = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        images.push(e.target.result);
        setHallImages(images);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("price", formData.price);
    formDataObj.append("description", formData.description);
    formDataObj.append("city", formData.city);
    formDataObj.append("country", formData.country);
    formDataObj.append("address", formData.address);

    for (let i = 0; i < hallImages.length; i++) {
      formDataObj.append("photos", hallImages[i]);
    }

    fetch("http://127.0.0.1:8000/planner/auth/addPlan", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken.token}`,
        "auth-token": `${userToken.token}`,
      },
      body: formDataObj,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setStatus(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h2 className="headContact">Add Plan</h2>

      <form className="formAddPlan" onSubmit={handleSubmit}>
        <label htmlFor="name">Plan Name:</label>
        <input
          className="inputPlanData"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          className="inputPlanData"
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          className="inputPlanData textarea1"
          id="description"
          value={formData.description}
          onChange={handleInputChange}
          name="description"
          required
        />
        <label htmlFor="hallImage">Choose Your Plan Images:</label>
        <input
          className="chooseImages"
          type="file"
          id="hallImage"
          name="hallImage"
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
    </>
  );
};

export default ModalAddplan;
