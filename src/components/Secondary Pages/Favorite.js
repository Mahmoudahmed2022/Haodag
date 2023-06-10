import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "../../Css/NewCardTemplate.css";
import HallProfile from "../Secondary Pages/Hall/HallProfile";
import { useState } from "react";
import photohall from "../images/image.jpg"
const Favorite = ({ cardData, isLogin,userData }) => {
  const nav = useNavigate();

  function goTohallDetails() {
    nav(`/hallDetails/${cardData.id}`, {
      state: { cardData: cardData, isLogin: isLogin },
    });
  }
  return (
    <div className="CardContainer ">
      <div className="contPhotoFav">
        <img className="WH" src={photohall} alt="no photo"></img>
      </div>
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
