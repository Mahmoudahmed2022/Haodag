import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "../Css/weddingPlannerCss.css";
import kariem from "./images/user.png";
import { Link } from "react-router-dom";
import ModalAddplan from "./ModalAddplan";
import ModalEditClientProfile from "./ModalEditClientProfile";
const WeddingPlannerProfile = () => {
  const [plannerData, setPlannerData] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [formData, setFormData] = useState({
    Name: "",
    Address: "",
    Phone: "",
    Gender: "",
    Email: "",
  });
  useEffect(() => {
    const fetchPlannerData = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      setPlannerData(result.data);
    };
    fetchPlannerData();
  }, []);

  return (
    <div className="profile-container">
        <div className="smallParent">
      <div className="profile-header">
        <div>
        <img src={kariem} alt="Profile" className="profile-image" />
        <p className="nameUser">Wedding Planner</p>
        </div>
        <div className="profile-details">
          <h1 className="profile-name">Kariem Atef</h1>
          <p className="profile-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae non rerum ab es.</p>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
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
                formData={formData}
              />
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
      </div>
      <div className="profile-content">
        <h2 className="section-heading">Wedding Plans</h2>
        {plannerData.map((plan) => (
          <div className="plan" key={plan.id}>
            <img src={plan.image} alt={plan.title} className="plan-image" />
            <div className="plan-details">
              <h3 className="plan-title">{plan.title}</h3>
              <p className="plan-description">{plan.description}</p>
              <p className="plan-price"><strong>Price:</strong> {plan.price}$</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default WeddingPlannerProfile;
