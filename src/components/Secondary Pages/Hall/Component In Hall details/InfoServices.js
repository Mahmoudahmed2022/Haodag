import React from "react";
import { Link } from "react-router-dom";
import "../../../../Css/HallProfile.css";
const InfoServices = ({products}) => {
  return (
    <>
      <div className="allContInfo">
        <div className="topShape"></div>

        <div className="card-content">
          <h2 className="section__title">Services</h2>
          <ul className="uiForInfo">
            {products?.data?.service?.map((element) => (
              <li className="liElement">
                <p className="pForData">{element}</p>
              </li>
            ))}
          </ul>
          <div className="bLM">
            <Link className="linkMoreD" to="/">
              More Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoServices;
