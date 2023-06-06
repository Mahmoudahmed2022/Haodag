import React from "react";
import {  useNavigate } from "react-router-dom";
import "../../../Css/NewCardTemplate.css";
const NewCardTemplate = ({ cardData}) => {
  const nav = useNavigate();

  function goTohallDetails() {
    nav(`/hallDetails/${cardData.id}`, {
      state: { cardData: cardData},
    });
  }
  return (
    <div className="CardContainer animate">
      <div className="ContImgCard">
        <img src={cardData?.photos[0]} alt=""></img>
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
export default NewCardTemplate;
