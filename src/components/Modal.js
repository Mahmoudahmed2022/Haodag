import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
const Modal = ({isOpen, onClose })=> {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    let navigate = useNavigate();

    const onClosing = () =>{
        navigate("/hallDetails");
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      // do something with form data here, e.g. send it to a server
      console.log({ name, email, phone, message });
      onClosing();

    };
  
    if (!isOpen) return null;

  return (
    <div className="modal-overlay">
    <div className="modal">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Send</button>
        <button type="button" onClick={onClosing}>
          Cancel
        </button>
      </form>
    </div>
  </div>
    // <div className="modal">
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group">
    //       <label htmlFor="name">Name:</label>
    //       <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="email">Email:</label>
    //       <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="phone">Phone:</label>
    //       <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="message">Message:</label>
    //       <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
  );
}

export default Modal;
