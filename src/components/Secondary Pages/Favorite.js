import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "../../Css/NewCardTemplate.css";
import HallProfile from "../Secondary Pages/Hall/HallProfile";
import { useState } from "react";
const Favorite = ({ cardData, userToken, isLogin }) => {
  const nav = useNavigate();

  function goTohallDetails() {
    nav(`/hallDetails/${cardData.id}`, {
      state: { cardData: cardData, isLogin: isLogin, userToken: userToken },
    });
  }
  return (
    <div className="CardContainer ">
      <div className="AllRightData">
        <div className="ContH3AndTrash">
          <h3>{cardData.name} </h3>
          {/* {isOwner&&(<FaTrash onClick={deleteHall}  />)} */}
        </div>

        <p>{cardData.title}</p>
        <p>Price: {cardData.price} </p>
        <div>
          <button
            className="lastButtonForDetails-button"
            onClick={goTohallDetails}
          >
            Details
          </button>
          {/* {isOwner && <Link to={`/hallDetails/${cardData.id}`}>Edit</Link>} */}
        </div>
      </div>
    </div>
  );
};
export default Favorite;