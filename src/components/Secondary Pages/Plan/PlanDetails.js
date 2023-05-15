import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../Css/Plandetails.css";
import PlanSlider from "../Plan/PlanSlider";
import { useLocation, useParams } from "react-router-dom";
function PlanDetails(props) {
  const [plan, setPlan] = useState();
  const params = useParams();
  const plan_Id = params.plannerId;
  const location = useLocation();
  const userToken = location?.state?.data;
  console.log(userToken, plan_Id);
  const fetchPlan = () => {
    fetch(`http://127.0.0.1:8000/planner/auth/getPlan/${plan_Id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken.token}`,
        "auth-token": `${userToken.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setPlan(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log(plan);
  useEffect(() => {
    fetchPlan();
  }, []);

  return (
    <>
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
      </div>
    </>
  );
}

export default PlanDetails;
