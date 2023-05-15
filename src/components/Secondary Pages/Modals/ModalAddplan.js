import React, { useState } from "react";
import "../../../Css/Modal.css";
import { useLocation, useNavigate } from "react-router-dom";

const ModalAddplan = (props) => {
  const [hallImages, setHallImages] = useState([]);
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [hallId, setHallId] = useState(null);

  const location = useLocation();
  const userToken = location?.state?.data;
  const token = location?.state?.token;

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    photos:[]
  });
 

  





  const photoData = {
    formData
  };
  
  fetch(`http://127.0.0.1:8000/owner/auth/addPhotoToMyhall/75`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken.token}`,
      "auth-token": `${userToken.token}`,
      // Add any other required headers
    },
    body: JSON.stringify(photoData),
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });

  
  

console.log(formData.photos)
  // const handleImageChange = (e) => {
  //   const files = e.target.files;
  
  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];
  
  //     // Create a new FormData object and append the current image file
  //     const newFormData = new FormData();
  //     newFormData.append('photos', file);
  
  //     // Merge the new FormData object with the existing formData state
  //     setFormData(prevFormData => ({
  //       ...prevFormData,
  //       photos: [...prevFormData.photos, newFormData]
  //     }));
  //   }
  // };
  

  // const handleImageChange = (e) => {
  //   const files = e.target.files;
  //   const promises = [];
  
  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];
  //     const reader = new FileReader();
  
  //     const promise = new Promise((resolve) => {
  //       reader.onload = (event) => {
  //         resolve(event.target.result);
  //       };
  //     });
  
  //     reader.readAsDataURL(file);
  //     promises.push(promise);
  //   }
  
  //   Promise.all(promises).then((results) => {
  //     setFormData({ ...formData, photos: results });
  //   });
  // };
  




console.log(formData)

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImagesArray = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        newImagesArray.push(e.target.result);
        setFormData({ ...formData, photos: newImagesArray });
      };

      reader.readAsDataURL(file);
    }
  };
 const handleInputChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
console.log(formData)
  // const handleSubmit1 = (event) => {
  //   event.preventDefault();
  //   //  const formDataObj = new FormData();
  //   // formDataObj.append("name", formData.name);
  //   // formDataObj.append("price", formData.price);
  //   // formDataObj.append("description", formData.description);

  //   // for (let i = 0; i < hallImages.length; i++) {
  //   //   formData.append("photos", hallImages.photos[i]);}
  //   // }
  //   fetch("http://127.0.0.1:8000/planner/auth/addPlan", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${userToken.token}`,
  //       "auth-token": `${userToken.token}`,
  //     },
  //     body:JSON.stringify(formData) ,
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })

  //     .then((data) => {
  //       console.log(data);
  //       // setHallId(data.data.id)
  //     })
  //     .catch((error) => {
  //       console.error(error.message);
  //       // display the error message to the user using an alert or some other method
  //     });
  // };
  // const addPhoto = (event) => {
  //   event.preventDefault();
  //   //  const formDataObj = new FormData();
  //   // formDataObj.append("name", formData.name);
  //   // formDataObj.append("price", formData.price);
  //   // formDataObj.append("description", formData.description);

  //   // for (let i = 0; i < hallImages.length; i++) {
  //   //   formData.append("photos", hallImages.photos[i]);}
  //   // }
  //   fetch(`http://127.0.0.1:8000/planner/auth/addPhotoToMyplan/${hallId}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${userToken.token}`,
  //       "auth-token": `${userToken.token}`,
  //     },
  //     body:JSON.stringify(formData) ,
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })

  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error.message);
  //       // display the error message to the user using an alert or some other method
  //     });
  // };

  const handleSubmit1 = (event) => {
    event.preventDefault();
  
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("price", formData.price);
    formDataObj.append("description", formData.description);
  
    for (let i = 0; i < formData.photos.length; i++) {
      formDataObj.append("photos[]", formData.photos[i]);
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
        // setHallId(data.data.id)
      })
      .catch((error) => {
        console.error(error.message);
        // display the error message to the user using an alert or some other method
      });
  };
  


  return (
    <>
      <h2 className="headContact">Add Plan</h2>

      <form className="formAddPlan" onSubmit={handleSubmit1}>
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
