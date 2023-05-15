import Carousel from "nuka-carousel/lib/carousel";
import React, { useState } from "react";
// import image1 from "../components/images/12.jpeg";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../Css/PlanSlider.css";

function PlanSlider(props) {
  const plan = props.parm;
  console.log(plan);
  return (
    <>
      {/* <Carousel wrapAround={true} slidesToShow={3} autoplay={(true, 3000)}>
        {plan.map((image, index) => (
          <img
            className="planslider-img "
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
        </Carousel>*/}
    </>
  );
}

export default PlanSlider;
