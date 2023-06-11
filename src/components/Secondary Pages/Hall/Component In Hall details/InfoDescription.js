import React from "react";
import { Link } from "react-router-dom";
import "../../../../Css/HallProfile.css";
const InfoDescription = ({hall}) => {
  return (
    <>
      <div className="allContInfo">
      <div className="top-shape"></div>

        <div className="card-content">
          <h2 className="section__title">Description</h2>

          <p className="pForData">- {hall.description}</p>

          
        </div>
      </div>
    </>
  );
};

export default InfoDescription;
