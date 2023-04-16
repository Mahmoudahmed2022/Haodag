import React from "react";
import { FaFacebook, FaInstagram, FaParking, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import ModalAddplan from "./ModalAddplan";
import ModalEditClientProfile from "./ModalEditClientProfile";
import kariem from "./images/user.png";
import { useState } from "react";
import "../Css/ProfileData.css";
import "../Css/MainProfileForAllUsers.css";
import "../Css/ClientProfile.scss";
import {
  MdDirectionsCarFilled,
  MdEmojiFoodBeverage,
  MdFastfood,
  MdLocationPin,
} from "react-icons/md";
import Cards from "./Cards";
import axios from "axios";
import { useEffect } from "react";
import HallForm2 from "./HallForm";
import DeleteHall from "./DeleteHall";
import HallCard from "./HallCard";
import DeletePlan from "./DeletePlan";

const HeaderDataProfile = (props) => {
  const location = useLocation();

  const isPlanner = location.pathname.includes("planner");
  const isOwner = location.pathname.includes("owner");
  const isClient = location.pathname.includes("client");
  const [show, setShow] = useState(false);
  const [showDeletePlan, setShowDeletePlan] = useState(false);

  const [showEdit, setShowEdit] = useState(false);
  const [visible, setVisible] = useState(5);
  const [ownerData, setOwnerData] = useState([]);
  const [clientData, setClientData] = useState([]);
  const [plannerData, setPlannerData] = useState([]);
  const [plan, setplan] = useState([]);
  let { param } = useParams();
  const fetchPlannerData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setPlannerData(result.data);
  };
  const fetchplan = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setplan(result.data);
  };
  const fetchClientData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setClientData(result.data);
  };
  const fetchOwnerData = () => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setOwnerData(data.data);
    });
  };
  useEffect(() => {
    fetchPlannerData();
    fetchplan();
    fetchOwnerData();
    fetchClientData();
  }, []);
  const loadMore = () => {
    setVisible(visible + 5);
  };
  const renderCard = (plan) => {
    return (
      <>
        <div className="plan" key={plan.id}>
          <img src={plan.image} alt={plan.title} className="plan-image" />
          <div className="plan-details">
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-description">{plan.description}</p>
            <p className="plan-price">
              <strong>Price:</strong> {plan.price}$
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="contProfileAll">
      <div className="profile-header">
        <div className="divContImgType">
          <img src={kariem} alt="Profile" className="profile-image" />
          <p className="nameUser">Wedding Planner</p>
        </div>
        <div className="profile-details">
          <h1 className="profile-name">Kariem Atef</h1>
          <p className="profile-bio">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            beatae non rerum ab es.
          </p>
          <div className="social-icons">
            <a href="#">
              <FaInstagram className="widthHieht" />
            </a>
            <a href="#">
              <FaFacebook className="widthHieht" />
            </a>
            <a href="#">
              <FaTwitter className="widthHieht" />
            </a>
          </div>
        </div>
        <div className="btnsPlannerProf">
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
              onClick={() => setShowEdit(true)}
              className="btn-flip"
              data-back="Edit"
              data-front="Edit"
            ></Link>
            <ModalEditClientProfile
              onClose={() => setShowEdit(false)}
              show={showEdit}
              formData={clientData}
            />
          </div>
          {isPlanner && (
            <div className="planner-prof-btn-div">
              <Link
                onClick={() => setShow(true)}
                className="btn-flip"
                data-back="AddPlan"
                data-front="AddPlan"
                to="#"
              ></Link>
              <ModalAddplan
                onClose={() => setShow(false)}
                show={show}
              />
              
            </div>
            
          )}
          {isPlanner && (
            <div className="planner-prof-btn-div">
              <Link
                onClick={() => setShowDeletePlan(true)}
                className="btn-flip"
                data-back="DeletePlan"
                data-front="DeletePlan"
                
              ></Link>
              <DeletePlan
                onClose={() => setShowDeletePlan(false)}
                show={showDeletePlan}
              />
            </div>
          )}
          {isOwner && (
            <div className="planner-prof-btn-div">
              <Link
                // onClick={() => setShow(true)}
                className="btn-flip"
                data-back="AddHall"
                data-front="AddHall"
                to="/hallForm"
              ></Link>
              {/* <HallForm2 onClose={() => setShow(false)} show={show} /> */}
            </div>
          )}
          {isOwner && (
            <div className="planner-prof-btn-div">
              <Link
                onClick={() => setShow(true)}
                className="btn-flip"
                data-back="DeleteHall"
                data-front="DeleteHall"
                to="#"
              ></Link>
              <DeleteHall onClose={() => setShow(false)} show={show} />

              {/* <HallForm2 onClose={() => setShow(false)} show={show} /> */}
            </div>
          )}
        </div>
      </div>

      {isPlanner && (
        <div className="profile-content">
          <h2 className="section-heading">Wedding Plans</h2>

          {plan.slice(0, visible).map(renderCard)}
          <div className="for-button">
            {visible < plannerData.length && (
              <button className="more" onClick={loadMore}>
                Load 5 More
              </button>
            )}
          </div>
        </div>
      )}

      {isOwner && (
        <div className="halls">
          <div className="home-allhalls-container">
            {ownerData.slice(0, visible).map((data, index) => (
              <HallCard key={index} cardData={data} />
            ))}{" "}
          </div>
          <div className="for-button">
            {visible < ownerData.length && (
              <button className="more" onClick={loadMore}>
                Load 5 More
              </button>
            )}
          </div>
        </div>
      )}

      {isClient && (
        <div className="booking-history">
          <h1 className="deals-tit">Last deals</h1>
          <Cards />
        </div>
      )}
    </div>
  );
};

export default HeaderDataProfile;
