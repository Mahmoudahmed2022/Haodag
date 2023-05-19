import React, { useState, useEffect } from "react";
import { FaParking, FaTrash } from "react-icons/fa";
import {
  MdDirectionsCarFilled,
  MdEmojiFoodBeverage,
  MdFastfood,
  MdLocationPin,
} from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
const HallCard = ({ hall, userToken, key,userData }) => {
  const navigate = useNavigate();
  console.log(userToken);
  console.log(hall);

  const isOwner = userData.role === "owner";
  function handleClick() {
    navigate(`/editHall/${hall.id}`, {
      state: { data: userToken, hall: hall },
    });
  }
  const Id = useParams();
  console.log(hall, userToken);

  function deleteCourse(hall_Id) {
    fetch(`http://127.0.0.1:8000/owner/auth/deleteHall/${hall_Id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken.token}`,
        "auth-token": `${userToken.token}`,
      },
    }).then((res) => {
      if (res.ok) {
        alert("Hall deleted successfully");
        window.location.reload();
      } else alert("Error Happened Please Try Again Later");
    });
  }
function goToHallDetails(){
  navigate(`/hallDetails/${hall.id}`,{state:{userToken:userToken,userData:userData}})

}
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="containerHalls" key={hall?.id}>
        <div className="RigthAndLeft">
          <div className="imageForHall">
            <img
              className="imginside"
              src={hall.photos[0]}
              alt={hall.name}
            ></img>
          </div>
          <div className="rightContentInfo">
            <div className="contTrashAndName">
              <div className="W90">
                <h2>{hall.name}</h2>
                <div className="iconsForDiscription">
                  <MdFastfood />
                  <MdEmojiFoodBeverage />
                  <MdDirectionsCarFilled />
                  <FaParking />
                </div>
              </div>

              <FaTrash
                className="delete"
                onClick={() => deleteCourse(hall.id)}
              />
            </div>

            <div className="priceAndLocation">
              <div className="priceHall">
                <p>{hall.price}$</p>
              </div>
              <div>
                <p>
                  <MdLocationPin /> {hall.name}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lastButtonForDetails">
          <button
            className="lastButtonForDetails-button"
            onClick={goToHallDetails}
            
          >
            Details
          </button>

          {isOwner && (
            <button
              className="lastButtonForDetails-button"
              onClick={handleClick}
            >
              Edit Hall
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default HallCard;
