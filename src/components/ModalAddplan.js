import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../Css/Modal.css"
import "../Css/ModalAddPlan.css"

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
    props.onClose()

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

 
  const reset =()=>{
    setName("");
    setPrice("");
    setDescription("");
  }

  if(!props.show){
    return null
  }
  return (
    <>
  
     <div className="modal-overlay">
      <div className="modal1">
      <div className="exit"><button className="buttonExit" onClick={()=>props.onClose()}>X</button></div>

        <h2 className="headContact">Add Plan</h2>

          <form onSubmit={handleSubmit}>
          <label htmlFor="name">Plan Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
          
          <label htmlFor="description">Description:</label>
          <textarea
          
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
          <label htmlFor="hallImage">Choose Your Plan Images:</label>
         <input
          type="file"
          id="hallImage"
          onChange={handleImageChange}
          accept="image/*"
          multiple
          required
        />
          <div>
            
           

            <div className="resetAndCancel">
            <button className="cancel" onClick={()=> props.onClose()}>Cancel</button>
            <button className="submitForm" type="submit" >Add Plan</button>
            </div>
           
          </div>
          
          </form>
        
      </div>
    </div>
   
    </>
  );
};

export default ModalAddplan;

