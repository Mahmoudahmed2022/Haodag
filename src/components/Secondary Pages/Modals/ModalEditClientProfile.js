import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../../Css/Modal.css";

const ModalEditClientProfile = (props) => {
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
  function ResetLoginData(event) {
    event.preventDefault();
    setFormData((prevFormData) => {
      return {
        prevFormData: (event.target.value = ""),
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
  console.log(formData);

  const onSubmitted = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:9001/products`, {
        formData,
      })
      .then((response) => {});
    console.log(formData);
    props.onClose();
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

          <h1 className="h1Modal">Edit Profile </h1>
          <form onSubmit={onSubmitted} className="FOrmCont">
            <div className="DivModalWithinINputLabel">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                onChange={getLoginData}
                type="text"
                className="form-control"
                id="Name"
                name="Name"
                defaultValue={props.formData.name}
              />
            </div>
            <div className="DivModalWithinINputLabel">
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
            <div className="DivModalWithinINputLabel">
              <label htmlFor="Phone" className="form-label">
                Phone Number
              </label>
              <input
                onChange={getLoginData}
                type="number"
                className="form-control"
                id="Phone"
                name="Phone"

                // defaultValue={product.name}
              />
            </div>

            <div className="DivModalWithinINputLabel">
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
            <div className="DivModalWithinINputLabel">
              <label htmlFor="description" className="form-label">
                description
              </label>
              <textarea
                onChange={getLoginData}
                type="text"
                className="form-control"
                id="description"
                name="description"

                // defaultValue={product.name}
              />
            </div>
            <div className="DivbtnModal">
              <button type="submit" className="btnModal">
                Edit Profile
              </button>
              <button className="btnModal" onClick={ResetLoginData}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalEditClientProfile;
