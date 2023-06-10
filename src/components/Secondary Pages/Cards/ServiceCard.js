import React from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MyContext } from "../../Main Pages/Redux";
import Swal from "sweetalert2";
import { useContext } from "react";
import "../../../Css/ServiceCard.css";
const ServiceCard = ({ cardData, userToken, isLogin }) => {
  const personData = useContext(MyContext);

  const navigate = useNavigate();
  function handleClick() {
    navigate(`/updateService/${cardData.id}`, {
      state: { service: cardData },
    });
  }
  function goToaAskToBook() {
    navigate(`/BookService/${cardData.id}`);
  }
  function deleteCourse(cardData) {
    Swal.fire({
      title: `Are You Sure To Delete Hall ${cardData.name} `,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(
          `http://127.0.0.1:8000/supplier/auth/deleteService/${cardData.id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${personData.token}`,
              "auth-token": `${personData.token}`,
            },
          }
        ).then((res) => {
          if (res.ok) {
            alert("Service deleted successfully");
            window.location.reload();
          } else alert("Error Happened Please Try Again Later");
        });
      }
    });
  }
  return (
    <>
      <article class="profile">
        <div class="profile-image">
          <img src={cardData.photos[0]} alt={cardData.name} />
        </div>

        <h2 class="profile-username">{cardData.name}</h2>
        <small class="profile-user-handle">{cardData.description}</small>
        <h4 class="profile-user-handle">{cardData.price}</h4>
        <div class="profile-actions">
          {personData?.role === "user" && (
            <button class="btn btn--primary" onClick={goToaAskToBook}>
              Buy
            </button>
          )}
          {personData?.role === "supplier" && (
            <button class="btn btn--primary" onClick={handleClick}>
              Edit
            </button>
          )}
        </div>
        <div className="trash">
          {" "}
          {personData?.role === "supplier" && (
            <FaTrash
              className="delete"
              onClick={() => deleteCourse(cardData)}
            />
          )}
        </div>
      </article>
    </>
  );
};
export default ServiceCard;
