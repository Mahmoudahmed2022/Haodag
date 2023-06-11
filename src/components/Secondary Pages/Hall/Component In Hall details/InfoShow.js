import React from "react";
import { Link } from "react-router-dom";
import "../../../../Css/HallProfile.css";
const InfoShow = ({hall}) => {
  return (
    <>
      <div className="allContInfo">
        <div className="topShape"></div>

        <div className="card-content">
          <h2 className="section__title">Shows</h2>
          <ul className="uiForInfo">
            {hall?.show?.map((element) => (
              <li className="liElement">
                <p className="pForData">{element}</p>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </>
  );
};

export default InfoShow;
