import React from "react";
import { Link } from "react-router-dom";
import "../../../../Css/HallProfile.css";
const InfoDescription = (props) => {
  const product = props.products;
  return (
    <>
      <div className="allContInfo">
      <div className="topShape"></div>

        <div className="card-content">
          <h2 className="section__title">Discription</h2>

          <h3></h3>

          <ul className="ulDescription">
            {/* {product.map((element) => (
              <div>
                <h3 className="h3Title">{element.Title} </h3>
                <p className="pForDescription">{element.Poster}</p>
              </div>
            ))} */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfoDescription;
