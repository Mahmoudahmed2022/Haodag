import React, { useState } from "react";
import "../../../Css/Modal.css";
const ModalForAskToBook = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  if (!props.show) {
    return null;
  }
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <div className="exit">
            <button className="buttonExit" onClick={() => props.onClose()}>
              X
            </button>
          </div>

          <h2 className="headContact">Ask To Book</h2>

          <form className="FormModal">
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
            <label htmlFor="datetime">Select start date and time:</label>
            <input
              type="datetime-local"
              id="datetime"
              name="datetime"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
            <label htmlFor="datetime">Select End date and time:</label>
            <input
              type="datetime-local"
              id="datetime"
              name="datetime"
              value={time}
              onChange={(event) => setTime(event.target.value)}
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
                <button className="cancel" onClick={() => props.onClose()}>
                  Cancel
                </button>
                <button className="submitForm" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalForAskToBook;
