import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../../Css/ServiceCard.css";
const ServiceCard = ({ cardData, userToken, isLogin }) => {
  const nav = useNavigate();

  return (
    <>
      <article class="profile">
        <div class="profile-image">
          <img src={cardData.photos[0]} alt={cardData.name} />
        </div>
        <h2 class="profile-username">{cardData.name}</h2>
        <small class="profile-user-handle">{cardData.description}</small>
        <small class="profile-user-handle">{cardData.price}</small>
        <div class="profile-actions">
          <button class="btn btn--primary">details</button>
          <button class="btn btn--icon">
            <i class="ph-export"></i>
          </button>
          <button class="btn btn--icon">
            <i class="ph-dots-three-outline-fill"></i>
          </button>
        </div>
        <div class="profile-links">
          <a href="#" class="link link--icon">
            <i class="ph-twitter-logo"></i>
          </a>
          <a href="#" class="link link--icon">
            <i class="ph-facebook-logo"></i>
          </a>
          <a href="#" class="link link--icon">
            <i class="ph-instagram-logo"></i>
          </a>
        </div>
      </article>
    </>
  );
};
export default ServiceCard;
