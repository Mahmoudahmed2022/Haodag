import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "../../Css/NewCardTemplate.css";
import HallProfile from "../Secondary Pages/Hall/HallProfile";
import { useState } from "react";
import photohall from "../images/image.jpg";
const Favorite = ({ cardData, isLogin, userData }) => {
  const nav = useNavigate();

  function goTohallDetails() {
    nav(`/hallDetails/${cardData.id}`, {
      state: { cardData: cardData, isLogin: isLogin },
    });
  }
  return (
    <div className="CardContainer ">
      <div className="contPhotoFav">
        <img className="WH" src={cardData?.photos?.[0]} alt="no photo"></img>
      </div>
      <div className="AllRightData">
        <div className="ContH3AndTrash">
          <h3 className="custom-scrollbar">{cardData?.name} </h3>
          {/* {isOwner&&(<FaTrash onClick={deleteHall}  />)} */}
        </div>
        <p className="custom-scrollbar">
          Price: <span className="boldColor">{cardData?.price}</span>{" "}
        </p>{" "}
        <p className="custom-scrollbar">
          Likes: <span className="boldColor">{cardData?.likes_count}</span>{" "}
        </p>{" "}<p className="custom-scrollbar">
          Comments: <span className="boldColor">{cardData?.comments_count}</span>{" "}
        </p>{" "}<p className="custom-scrollbar">
          Type: <span className="boldColor">{cardData?.type}</span>{" "}
        </p>{" "}
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
