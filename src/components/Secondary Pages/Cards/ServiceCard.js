import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../../Css/ServiceCard.css";
const ServiceCard = ({ cardData, userToken, isLogin }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/updateService/${cardData.id}`, {
      state: { service: cardData },
    });
  }
  return (
    <>
      <article class="profile">
        <div class="profile-image">
          <img src={cardData.photos[0]} alt={cardData.name} />
        </div>
        <h2 class="profile-username">{cardData.name}</h2>
        <br />
        <small class="profile-user-handle">{cardData.description}</small>
        <br />
        <h4 class="profile-user-handle">{cardData.price}</h4>
        <div class="profile-actions">
          <button class="btn btn--primary">Buy</button>
          <button class="btn btn--primary" onClick={handleClick}>
            Edit
          </button>
        </div>
      </article>
    </>
  );
};
export default ServiceCard;
