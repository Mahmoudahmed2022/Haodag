import React from "react";
import user from "./images/user.png";
import "../Css/WeddingPlanners.css";
function WeddingPlanners() {
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
        <div className="Planners-container">WeddingPlanners</div>
      </div>
    </>
  );
}

export default WeddingPlanners;
