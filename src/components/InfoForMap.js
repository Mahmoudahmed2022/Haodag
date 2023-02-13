import React from "react";
import "../Css/HallProfile.css";

const InfoForMap = (props) => {
  let products1 = props.products;
  let img1 = props.img;
  let filteredData = products1.filter((item) => item.Year === "2005"); //instead of map
  return (
    <div className="allInfo">
      
      <div className="attributeName1">
        <p className="p-attributeName">Map</p>
      </div>
      <div className="headcircle">
        <img className="mapImg" src={img1} alt="" />
      </div>
      <div className="buttonPrice">
      <button type="button" className="button-buttonPrice">Details</button>
      </div>
      
    </div>
  );
};

export default InfoForMap;
