import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Css/Modal.css";
import "../Css/ModalAddPlan.css";

const ModalEditPlannerProfile = (props) => {
  const [formData, setFormData] = useState(props.formData);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(null);
  const [hallImage, setHallImage] = useState();
  const params = useParams();
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with form data here, e.g. send it to a server
    console.log({ name, email, phone, address, gender });
    setName("");
    setEmail("");
    setAddress("");
    setGender("");
    setPhone("");
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

  function getLoginData(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const reset = () => {
    setName("");
    setEmail("");
    setAddress("");
    setGender("");
    setPhone("");
  };

  if (!props.show) {
    return null;
  }
console.log(formData)

  const onSubmitted = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:9001/products`, {
        formData,
      })
      .then((response) => {});
      console.log(formData)
      props.onClose()
    // navigate("/products");
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal1">
          <div className="exit">
            <button className="buttonExit" onClick={() => props.onClose()}>
              X
            </button>
          </div>

          <form onSubmit={onSubmitted}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                onChange={getLoginData}
                type="text"
                className="form-control"
                id="Name"
                name="Name"

                defaultValue="Kariem"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                onChange={getLoginData}
                type="email"
                className="form-control"
                id="Email"
                name="Email"
                // placeholder="Product Price"
                // defaultValue={product.email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Phone" className="form-label">
                Phone Number
              </label>
              <input
                onChange={getLoginData}
                type="text"
                className="form-control"
                id="Phone"
                name="Phone"

                // defaultValue={product.name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Gender" className="form-label">
                Gender
              </label>
              <input
                onChange={getLoginData}
                type="text"
                className="form-control"
                id="Gender"
                name="Gender"

                // defaultValue={product.name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Adderss" className="form-label">
                Adderss
              </label>
              <input
                onChange={getLoginData}
                type="text"
                className="form-control"
                id="Adderss"
                name="Address"

                // defaultValue={product.name}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Edit Profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalEditPlannerProfile;
