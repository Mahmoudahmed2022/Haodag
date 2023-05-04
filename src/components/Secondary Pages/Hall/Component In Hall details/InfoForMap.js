import React from "react";
import "../../../../Css/HallProfile.css";

const InfoForMap = (props) => {
  let products1 = props.products;
  let img1 = props.img;
  let filteredData = products1.filter((item) => item.Year === "2005"); //instead of map
  return (
    <div className="allInfo">
      
      {/* <div className="attributeName1">
        <p className="p-attributeName">Map</p>
      </div> */}
      <div className="headcircle">
        <img className="mapImg" src={img1} alt="" />
      </div>
      <div className="buttonPrice">
      <a target="_blank"  href="https://www.google.com/maps/place/Giza,+El+Omraniya,+Giza+Governorate/@30.0167698,31.1196028,12z/data=!3m1!4b1!4m6!3m5!1s0x1458469235579697:0x4e91d61f9878fc52!8m2!3d30.0130557!4d31.2088526!16zL20vMDEyYjBx" type="button" className="button-buttonPrice">Map</a>
      </div>
      
    </div>
  );
};

export default InfoForMap;
