import React, { useEffect, useState } from "react";
import "../../../Css/Plandetails.css";
import PlanSlider from "../Plan/PlanSlider";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { BiMailSend } from "react-icons/bi";
import NavbarWithSideBar from "../../Main Pages/NavbarWithSideBar";
import { useContext } from "react";
import { MyContext } from "../../Main Pages/Redux";
function PlanDetails() {
  const personData = useContext(MyContext);
  const navigate = useNavigate();

  const params = useParams();
  const plan_Id = params.plannerId;
  const location = useLocation();
  const userData = location?.state?.userData;
  const plan = location?.state?.plan;
  console.log(personData, plan);
   function goToaAskToBook() {
    navigate(`/BookPlan/${plan_Id}`,);
  }
  useEffect(() => {
  }, []);

  return (
    <>
      <NavbarWithSideBar />
      <div className="Plan-big-cont">
        <div className="plantit">
          <h1 className="PlanName">{plan?.name}</h1>
        </div>
        <div className="plan-slider">
          <PlanSlider param={plan?.photos} />
        </div>
        <div>
          <div className="top-shape"></div>
          <div className="plan-description">
            <h1>Description</h1>
            <p>{plan?.description}</p>
          </div>
        </div>
        <div>
          <div className="top-shape"></div>
          <div className="plan-description">
            <h1>Price</h1>
            <ul>{plan?.price} &nbsp;$ </ul>
          </div>
        </div>
        {personData?.role === "user" ? (
          <div className="contactWUs" to="/modal">
            <button className="askBooking" onClick={goToaAskToBook}>
              <BiMailSend className="colorSvg1" />
              Ask To Book
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default PlanDetails;
