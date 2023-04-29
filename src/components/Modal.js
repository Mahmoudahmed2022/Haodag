import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../Css/Modal.css"
const Modal = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with form data here, e.g. send it to a server
    console.log({ name, email, phone, message });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    props.onClose()

  };
 
  const reset =()=>{
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  if(!props.show){
    return null
  }
  return (
    <>
  
     <div className="modal-overlay">
      <div className="modal">
      <div className="exit"><button className="buttonExit" onClick={()=>props.onClose()}>X</button></div>

        <h2 className="headContact">Contact Us</h2>

          <form onSubmit={handleSubmit} className="FormModal">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
          
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
          <div>
            
           

            <div className="resetAndCancel">
            <button className="cancel" onClick={()=> props.onClose()}>Cancel</button>
            <button className="submitForm" type="submit" >Submit</button>
            </div>
           
          </div>
          
          </form>
        
      </div>
    </div>
   
    </>
  );
};

export default Modal;

// import React, { useState } from 'react';
// import {  useNavigate } from 'react-router-dom';
// function Modal({isOpen, onClose }) {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [message, setMessage] = useState("");
//     let navigate = useNavigate();

//     const onClosing = () =>{
//         navigate("/hallDetails");
//     }

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // do something with form data here, e.g. send it to a server
    //   console.log({ name, email, phone, message });
    //   onClosing();

    // };

//     if (!isOpen) return null;

//   return (
//   <div className="modal-overlay">
//   <div className="modal">
//     <h2>Contact Us</h2>
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//         required
//       />
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={(event) => setEmail(event.target.value)}
//         required
//       />
//       <label htmlFor="phone">Phone:</label>
//       <input
//         type="tel"
//         id="phone"
//         value={phone}
//         onChange={(event) => setPhone(event.target.value)}
//       />
//       <label htmlFor="message">Message:</label>
//       <textarea
//         id="message"
//         value={message}
//         onChange={(event) => setMessage(event.target.value)}
//         required
//       />
//       <button type="submit">Send</button>
//       <button type="button" onClick={onClosing}>
//         Cancel
//       </button>
//     </form>
//   </div>
// </div>
//     // <div className="modal">
//     //   <form onSubmit={handleSubmit}>
//     //     <div className="form-group">
//     //       <label htmlFor="name">Name:</label>
//     //       <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
//     //     </div>
//     //     <div className="form-group">
//     //       <label htmlFor="email">Email:</label>
//     //       <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//     //     </div>
//     //     <div className="form-group">
//     //       <label htmlFor="phone">Phone:</label>
//     //       <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//     //     </div>
//     //     <div className="form-group">
//     //       <label htmlFor="message">Message:</label>
//     //       <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
//     //     </div>
//     //     <button type="submit">Submit</button>
//     //   </form>
//     // </div>
//   );
// }

// export default Modal;

// import React, { useState } from 'react';
// import '../Css/Modal.css';

// function Modal(props) {
//   const [showModal, setShowModal] = useState(true);

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <>
//       <button onClick={toggleModal}>Open Modal</button>
//       {showModal ? (
//         <>
//           <div className="overlay" onClick={toggleModal}></div>
//           <div className="modal">
//             <div className="modal-content">
//               <span className="close" onClick={toggleModal}>
//                 &times;
//               </span>
//               <h2>Modal Title</h2>
//               <p>Modal content goes here...</p>
//             </div>
//           </div>
//         </>
//       ) : null}
//     </>
//   );
// }

// export default Modal;

// import React, { useState, useEffect } from 'react';
// import '../Css/Modal.css';

// const Modal = ({ onClose }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleEscapeKey = (event) => {
//       if (event.keyCode === 27) {
//         setIsOpen(false);
//         onClose();
//       }
//     };

//     document.addEventListener('keydown', handleEscapeKey);

//     return () => {
//       document.removeEventListener('keydown', handleEscapeKey);
//     };
//   }, [onClose]);

//   return (
//     <div className={`modal ${isOpen ? 'open' : ''}`}>
//       <div className="modal-overlay" onClick={() => setIsOpen(false)} />
//       <div className="modal-content">
//         <form>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" />

//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" />

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Modal;
