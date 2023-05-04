import React, { useEffect, useState } from "react";
import "../../Css/WeddingPlanners.css";
// import user2 from "./images/user2.png";
import axios from "axios";
import "../../Css/Reservation.css";
import user from "../images/user.png";
function Reservations() {
  const [reservations, setReservations] = useState([]);
  const allReservations = () => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setReservations(data.data);
    });
  };
  useEffect(() => {
    allReservations();
  }, []);
  return (
    <>
      <div>
        <h1 className="reserve-tit">Reservations Requests</h1>
        <div className="reserv-big-cont">
          {reservations.map((reservation) => {
            return (
              <div className="reserv-sml-cont" key={reservation.key}>
                <h3>{reservation.key}</h3>
                <div className="user-div">
                  <div className="user-pic-cont">
                    <img
                      className="reserve-user-pic"
                      src={user}
                      alt="user pic"
                    />
                  </div>
                  <div className="user-info-div">
                    <h5>
                      {reservation.title.slice(0, 15)}
                      <br />
                      3010501212357
                      <br />
                      15/5/2023
                    </h5>
                  </div>
                </div>

                <img
                  className="reserve-hall-pic"
                  src={reservation.image}
                  alt="hall pic"
                />
                <h5 className="hall-name">
                  {reservation.description.slice(0, 20)}
                  <br />
                  {reservation.price} $
                </h5>
                <div className="buttons">
                  <button className="accept-btn reserve-btn">Accept</button>
                  <button className="decline-btn reserve-btn">Decline</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Reservations;
