import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import Kariem from "./images/kariem.jpeg";
import cover from "./images/openclosed.jpg";
import "../Css/ClientProfile.scss";
import "../Css/PlannerProfile.css";
import axios from "axios";
import ModalAddplan from "./ModalAddplan";
function WeddingPlanner(props) {
  // const planner_id = useParams();
  // // console.log(planner_id.plannerId);
  // const [planner, setPlanner] = useState([]);
  // const api_url = `https://fakestoreapi.com/products/${planner_id.plannerId}`;
  // useEffect(() => {
  //   axios.get(api_url).then((data) => {
  //     setPlanner(data.data);
  //   });
  // }, []);
  // console.log(planner);
  const [show, setShow] = useState(false);
  const [planners, setPlanners] = useState([]);
  const [visible, setVisible] = useState(5);
  const allPlanners = () => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setPlanners(data.data);
    });
  };
  const loadMore = () => {
    setVisible(visible + 5);
  };

  useEffect(() => {
    allPlanners();
  }, []);

  const renderCard = (planner) => {
    return (
      <>
        <div className="planner-container" key={planner.id}>
          <div className="img-planner-div">
            {/*   <img
          src={planner.image}
          className="planner-img"
          alt={planner.title}
        />
  */}
            <img
              src={planner.image}
              className="planner-img"
              alt={`plane ${planner.id}`}
            />
          </div>
          <div className="planner-body">
            <p className="plan-title"> plane {planner.id}</p>
            <Link
              className="planner-details-btn s-d-hover"
              to={`/Plandetails/${planner.id}`}
            >
              Details
            </Link>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="planner-big-cont">
        <div className="planner-cover-cont">
          {/*  <img
            src={cover}
            className="planner-profile-cover"
            alt="planner cover"
  />*/}
          <div className="planner-div">
            <label className="planner-name">Kariem Atef</label>
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
              Kariem Atef
            </label>
          </div>
          <div className="planner-email-div planner-sml-cont">
            <label className="planner-label planner-all-label">Email</label>
            <label className="planner-data planner-all-label">
              Kariem Atef@gmail.com
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
          <div className="planner-prof-btn-div">
            <Link
              onClick={() => setShow(true)}
              className="btn-flip"
              data-back="AddPlan"
              data-front="AddPlan"
              to="#"
            ></Link>
            <ModalAddplan onClose={() => setShow(false)} show={show} />
          </div>
        </div>
        <div className="plans-cont">
          <div className="plans-tit-div">
            <h2 className="plans-tit">plans</h2>
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
          <div className="state-cont">
            <p className="statement">
              Each plan differs from the other in terms of prices, features,
              presentation and organization of the party
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeddingPlanner;
