import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../Css/Plandetails.css";
import PlanSlider from "../Plan/PlanSlider";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { BiMailSend } from "react-icons/bi";
import NavbarWithSideBar from "../../Main Pages/NavbarWithSideBar";
import AskToBookPlan from "../AskToBooKPlan";
function PlanDetails(props) {
  // const [plan, setPlan] = useState();
  const navigate = useNavigate();

  const params = useParams();
  const plan_Id = params.plannerId;
  const location = useLocation();
  const userToken = location?.state?.data;
  const userData = location?.state?.userData;

  const plan = location?.state?.plan;
  console.log(userToken, plan);
  // const fetchPlan = () => {
  //   fetch(`http://127.0.0.1:8000/planner/auth/getPlan/${plan_Id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${userToken.token}`,
  //       "auth-token": `${userToken.token}`,
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Data received from server:", data);
  //       setPlan(data.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // };
  function goToaAskToBook() {
    navigate(`/BookPlan/${plan_Id}`, { state: { data: userToken } });
  }
  useEffect(() => {
    // fetchPlan();
  }, []);

  return (
    <>
      <NavbarWithSideBar userData={userData} userToken={userToken} />
      <div className="Plan-big-cont">
        <div className="plantit">
          <h1 className="PlanName">{plan.name}</h1>
        </div>
        <div className="plan-slider">
          <PlanSlider param={plan.photos} />
        </div>
        <div>
          <div className="top-shape"></div>
          <div className="plan-description">
            <h1>Description</h1>
            <p>{plan.description}</p>
          </div>
        </div>
        <div>
          <div className="top-shape"></div>
          <div className="plan-description">
            <h1>Price</h1>
            <ul>{plan.price} &nbsp;$ </ul>
          </div>
        </div>
        <div className="contactWUs" to="/modal">
          <button className="askBooking" onClick={goToaAskToBook}>
            <BiMailSend className="colorSvg1" />
            Ask To Book
          </button>
        </div>
      </div>
    </>
  );
}

export default PlanDetails;
