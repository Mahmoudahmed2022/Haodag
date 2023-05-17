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
      <div className="modal-overlay2">
        <div className="modal2">
          <div className="exit2">
            <button className="buttonExit2" onClick={() => props.onClose()}>
              X
            </button>
          </div>

          <h2 className="headContact">Ask To Book</h2>

          <form className="FormModal2">
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
            <label htmlFor="datetime">Select start date and time:</label>
            <input
                          className="InputModalHallDetails"

              type="datetime-local"
              id="datetime"
              name="datetime"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
            <label htmlFor="datetime">Select End date and time:</label>
            <input
                          className="InputModalHallDetails"

              type="datetime-local"
              id="datetime"
              name="datetime"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />

            <label htmlFor="message">Message:</label>
            <textarea
                          className="textAreaModalHallDetails"

              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
            <div>
              <div className="resetAndCancel2">
                <button className="cancel2" onClick={() => props.onClose()}>
                  Cancel
                </button>
                <button className="submitForm2" type="submit">
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
