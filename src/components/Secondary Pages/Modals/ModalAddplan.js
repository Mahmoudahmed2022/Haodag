// import React, { useState } from "react";
// import "../../../Css/Modal.css";
// import { useLocation, useNavigate } from "react-router-dom";

// const ModalAddplan = (props) => {
//   const [hallImages, setHallImages] = useState([]);
//   const navigate = useNavigate();
//   const [status, setStatus] = useState(null);
//   const [hallId, setHallId] = useState(null);

//   const location = useLocation();
//   const userToken = location?.state?.data;
//   const token = location?.state?.token;

//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     description: "",
//     photos: [],
//   });

//   console.log(formData);

//   const handleImageChange1 = (event) => {
//     const selectedImages = Array.from(event.target.files);
//     setFormData({
//       ...formData,
//       photos: selectedImages,
//     });
//   };
//   const handleInputChange = (e) => {
//     setFormData((prev) => {
//       return {
//         ...prev,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };
//   console.log(formData);

//   const handleSubmit1 = (event) => {
//     event.preventDefault();

//     const formDataObj = new FormData();
//     formDataObj.append("name", formData.name);
//     formDataObj.append("price", formData.price);
//     formDataObj.append("description", formData.description);

//     for (let i = 0; i < formData.photos.length; i++) {
//       formDataObj.append(`photos[${i}]`, formData.photos[i]);
//     }

//     fetch("http://127.0.0.1:8000/planner/auth/addPlan", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${userToken.token}`,
//         "auth-token": `${userToken.token}`,
//       },
//       body: formDataObj,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         // setHallId(data.data.id)
//       })
//       .catch((error) => {
//         console.error(error.message);
//         // display the error message to the user using an alert or some other method
//       });
//   };

//   return (
//     <>
//       <h2 className="headContact">Add Plan</h2>

//       <form
//         className="formAddPlan"
//         onSubmit={handleSubmit1}
//         encType="multipart/form-data"
//       >
//         <label htmlFor="name">Plan Name:</label>
//         <input
//           className="inputPlanData"
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           required
//         />
//         <label htmlFor="price">Price:</label>
//         <input
//           className="inputPlanData"
//           type="number"
//           id="price"
//           name="price"
//           value={formData.price}
//           onChange={handleInputChange}
//           required
//         />

//         <label htmlFor="description">Description:</label>
//         <textarea
//           className="inputPlanData textarea1"
//           id="description"
//           value={formData.description}
//           onChange={handleInputChange}
//           name="description"
//           required
//         />
//         <label htmlFor="photos">Choose Your Plan Images:</label>
//         <input
//           className="chooseImages"
//           type="file"
//           id="photos"
//           name="photos"
//           onChange={handleImageChange1}
//           multiple
//           required
//         />

//         <div>
//           <div className="resetAndCancel">
//             <button className="cancel" onClick={() => props.onClose()}>
//               Cancel
//             </button>
//             <button className="submitForm" type="submit">
//               Add Plan
//             </button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default ModalAddplan;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../../Css/Modal.css";

const ModalAddPlan = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    photos: [],
  });
  const [status, setStatus] = useState(null);

  const location = useLocation();
  const userToken = location?.state?.data;
  const token = location?.state?.token;

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setFormData({
      ...formData,
      photos: selectedImages,
    });
  };
  const handleInputChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("price", formData.price);
    formDataObj.append("description", formData.description);

    for (let i = 0; i < formData.photos.length; i++) {
      formDataObj.append(`photos[${i}]`, formData.photos[i]);
    }

    fetch("http://127.0.0.1:8000/planner/auth/addPlan", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken.token}`,
        "auth-token": `${userToken.token}`,
      },
      body: formDataObj,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error.message);
        // Display the error message to the user using an alert or some other method
      });
  };

  return (
    <>
      <h2 className="headContact">Add Plan</h2>

      <form
        className="formAddPlan"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
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
        <label htmlFor="photos">Choose Your Plan Images:</label>
        <input
          className="chooseImages"
          type="file"
          id="photos"
          name="photos"
          onChange={handleImageChange}
          multiple
          required
        />

        <div>
          <div className="resetAndCancel">
            <button className="cancel" onClick={onClose}>
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

export default ModalAddPlan;