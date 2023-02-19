import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Kariem from "./images/kariem.jpeg";
import cover from "./images/openclosed.jpg";
import "../Css/ClientProfile.scss";
import "../Css/PlannerProfile.css";
function WeddingPlanner(props) {
  const planner_id = props.data;
  console.log(planner_id);
  const [planner, setPlanner] = useState([]);
  const api_url = `https://fakestoreapi.com/products/${planner_id}`;
  console.log(api_url);
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setPlanner(data));
  }, []);
  return (
    <>
      <div className="planner-big-cont">
        <div className="planner-cover-cont">
          {/*<img
            src={cover}
            className="planner-profile-cover"
            alt="planner cover"
  />*/}
          <div className="planner-div">
            <label className="planner-name">Mahmoud Ahmed</label>
            <label className="role-type">Planner</label>
          </div>
          <div className="pic-planner-cont">
            <div className="planner-profile-photo-cont">
              <img
                src={Kariem}
                className="planner-profile-photo"
                alt="planner pic"
              />
            </div>
          </div>
        </div>
        <div className="planner-info">
          <div className="planner-name-div planner-sml-cont">
            <label className="planner-label planner-all-label">Name</label>
            <label className="planner-data planner-all-label">
              Mahmoud Ahmed
            </label>
          </div>
          <div className="planner-email-div planner-sml-cont">
            <label className="planner-label planner-all-label">Email</label>
            <label className="planner-data planner-all-label">
              Mahmoud@gmail.com
            </label>
          </div>
          <div className="planner-address-div planner-sml-cont">
            <label className="planner-label planner-all-label">Address</label>
            <label className="planner-data planner-all-label">
              Egypt-giza-elhawmdya
            </label>
          </div>
          <div className="planner-nationalid-div planner-sml-cont">
            <label className="planner-label planner-all-label">
              National Id
            </label>
            <label className="planner-data planner-all-label">
              30105012102357
            </label>
          </div>
          <div className="planner-phone-div planner-sml-cont">
            <label className="planner-label planner-all-label">
              Phone Number
            </label>
            <label className="planner-data planner-all-label">
              01154184217
            </label>
          </div>
          <div className="planner-gender-div planner-sml-cont">
            <label className="planner-label planner-all-label">Gendr</label>
            <label className="planner-data planner-all-label">Male</label>
          </div>
          <div className="planner-prof-btn-div">
            <Link
              className="btn-flip"
              data-back="Contact"
              data-front="Contact"
              to="#"
            ></Link>
          </div>
          <div className="planner-prof-btn-div">
            <Link
              className="btn-flip"
              data-back="Edit"
              data-front="Edit"
              to="#"
            ></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeddingPlanner;
