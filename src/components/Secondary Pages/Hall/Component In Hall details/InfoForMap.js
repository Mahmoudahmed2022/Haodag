import React from "react";
import "../../../../Css/HallProfile.css";
import image from "../../../images/map.jpg";

const InfoForMap = ({hall}) => {
  // let filteredData = products1.filter((item) => item.Year === "2005"); //instead of map
  return (
    <div className="allInfo">
      {/* <div className="attributeName1">
        <p className="p-attributeName">Map</p>
      </div> */}
      <div className="headcircle">
        <img className="mapImg" src={image} alt="" />
      </div>
      <div className="buttonPrice">
        <a
          target="_blank"
          href={hall.address}
          type="button"
          className="button-buttonPrice"
        >
          Map
        </a>
      </div>
    </div>
  );
};

export default InfoForMap;
