import React, { useEffect, useState } from "react";
import "../../../Css/WeddingPlanners.css";
// import user2 from "./images/user2.png";
import axios from "axios";
import "../../../Css/Reservation.css";
import user from "../../images/user3.png";
import { Link } from "react-router-dom";
function HallsRequests({hallsRequest,userToken}) {
  console.log(hallsRequest)
  console.log(userToken)

  const ConfirmHall =(hall)=>{
    fetch(`http://127.0.0.1:8000/admin/auth/confirmHallRequest/${hall.id}`, {
      method: "POST",
      headers: {
        "auth-token": `${userToken.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {console.log(data)})

  
  }
  const CancelHall =(hall)=>{
    fetch(`http://127.0.0.1:8000/admin/auth/rejectHallRequest/${hall.id}`, {
      method: "POST",
      headers: {
        "auth-token": `${userToken.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {console.log(data)})

  
  }
  return (
    <>
      <div>
        <h1 className="Requests-tit">Halls Confirmation Requests</h1>
        <div className="reserv-big-cont">
          {hallsRequest.map((reservation) => {
            return (
              <div className="reserv-sml-cont" key={reservation.key}>
                <h3>{reservation.key}</h3>
                <div className="user-div">
                  <div className="user-info-div">
                    <h5>
                      {reservation.title}
                      <br />
                      3010501212357
                      <br />
                      15/5/2023
                    </h5>
                  </div>
                </div>

                <h5 className="hall-name">
                  {reservation.description}
                  <br />
                  {reservation.price} $
                </h5>
                <div className="buttons">
                <button
                    className="accept-btn reserve-btn"
                    onClick={() => ConfirmHall(reservation)}
                  >
                    Confirm
                  </button>
                  <button
                    className="decline-btn reserve-btn"
                    onClick={() => CancelHall(reservation)}
                  >
                    Reject
                  </button>
                  <Link
                    to={`/hallDetails/${reservation.id}`}
                    className="view-btn reserve-btn"
                  >
                    View
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HallsRequests;
