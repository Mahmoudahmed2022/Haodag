import React from "react";
import "../../Css/WeddingPlanners.css";
import { useEffect, useState } from "react";
import user2 from "../images/user2.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function WeddingPlanners() {
  const [planners, setPlanners] = useState([]);
  const [visible, setVisible] = useState(6);
  const navigate = useNavigate();

  const allPlanners = () => {
    fetch("http://127.0.0.1:8000/api/auth/getAllPlanners")
      .then((response) => response.json())
      .then((data) => {
        setPlanners(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  function goToPlannerProfile() {
    navigate(`/planner/${planners.id}`)
    
  }
  const loadMore = () => {
    setVisible(visible + 6);
  };
console.log(planners)
  useEffect(() => {
    allPlanners();
  }, []);
  const renderCard = (planner) => {
    return (
      <>
        <div className="planner-container" key={planner.id}>
          <div className="img-planner-div">
            <img src={user2} className="planner-img" alt={planner.title} />
          </div>
          <div className="planner-body">
            <p className="planner-title">{planner.name}</p>
            <button
              className="planner-details-btn s-d-hover"
              onClick={goToPlannerProfile}
            >
              Details
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="WeddingPlanners-container">
        <div className="land-container">
          <div className="sml-land-container">
            {/* <div className="user-pic">
              <img src={user} alt="user pic" />
            </div> */}
            <div className="landing-text">
              <div className="big-landing-text-container">
                <p className="big-landing-text">Want a magnificent wedding</p>
              </div>
              <div className="sml-landing-text-container">
                <p className="sml-landing-text">
                  Choose wedding planner to have one
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Planners-container">
          <div className="allPlanners-container">
            {planners.slice(0, visible).map(renderCard)}
          </div>
          <div className="for-button">
            {visible < planners.length && (
              <button className="more" onClick={loadMore}>
                Load 5 More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WeddingPlanners;
