import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../../Css/Modal.css";
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
    props.onClose();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  if (!props.show) {
    return null;
  }
  return (
    <>
      <div className="modal-overlay2">
        <div className="modal2">
          <div className="exit2">
            <button className="buttonExit2" onClick={() => props.onClose()}>
              X
            </button>
          </div>

          <h2 className="headContact2">Contact Us</h2>

          <form onSubmit={handleSubmit} className="FormModal2">
            <label htmlFor="name">Name:</label>
            <input
              className="InputModalHallDetails"
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              className="InputModalHallDetails"
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <label htmlFor="phone">Phone:</label>
            <input
              className="InputModalHallDetails"
              type="tel"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <label htmlFor="message">Message:</label>
            <textarea
              className="textAreaModalHallDetails"
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
            <div className="resetAndCancel2">
              <button className="cancel2" onClick={() => props.onClose()}>
                Cancel
              </button>
              <button className="submitForm2" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;

