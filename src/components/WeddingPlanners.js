import React from "react";
import user from "./images/user.png";
import "../Css/WeddingPlanners.css";
import { useEffect, useState } from "react";
import user2 from "./images/user2.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavbarWithSideBar from "./NavbarWithSideBar";
import Footer from "./Footer";

function WeddingPlanners() {
  const [planners, setPlanners] = useState([]);
  const api_url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setPlanners(data));
  }, []);
  return (
    <>
      <NavbarWithSideBar />

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
            {planners.map((planner) => {
              return (
                <div className="planner-container" key={planner.id}>
                  <div className="img-planner-div">
                    {/*   <img
                      src={planner.image}
                      className="planner-img"
                      alt={planner.title}
                    />
              */}
                    <img
                      src={user2}
                      className="planner-img"
                      alt={planner.title}
                    />
                  </div>
                  <div className="planner-body">
                    <p className="planner-title">
                      {planner.title.slice(0, 20)}
                    </p>
                    <Link
                      className="details-btn s-d-hover"
                      to={`/WeddingPlanner/${planner.id}`}
                    >
                      Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WeddingPlanners;
