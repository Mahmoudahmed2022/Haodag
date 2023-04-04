import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/weddingPlannerCss.css";
import HeaderDataProfile from "./HeaderDataProfile";
import loader from "../components/images/loader.gif"
const WeddingPlannerProfile = () => {
  //   const [show, setShow] = useState(false);
  //   const [showEdit, setShowEdit] = useState(false);

  const [plannerData, setPlannerData] = useState([]);

  const [plan, setplan] = useState([]);
  const fetchPlannerData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setPlannerData(result.data);
  };
  const fetchplan = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setplan(result.data);
  };
  useEffect(() => {
    fetchPlannerData();
    fetchplan();
  }, []);
  const [visible, setVisible] = useState(5);

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

if(plan===null){
    return(
        <img src={loader} alt="Loader"></img>
    )
}

  return (
    <div className="profile-container">
      <div className="smallParent">
        <HeaderDataProfile plannerData={plannerData} plan={plan} />

        {/* Past Code */}

        {/* <div className="profile-header">
          <div>
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
                <FaInstagram />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
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
        </div> */}

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
          {/* {plannerData.map((plan) => (
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
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default WeddingPlannerProfile;
