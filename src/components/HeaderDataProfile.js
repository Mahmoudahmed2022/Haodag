import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link,useLocation  } from "react-router-dom";
import ModalAddplan from "./ModalAddplan";
import ModalEditClientProfile from "./ModalEditClientProfile";
import kariem from "./images/user.png";
import { useState } from "react";

const HeaderDataProfile = (props) =>{
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [plannerData, setPlannerData] = useState(props.formData);
    const location = useLocation();
    const isPlanner = location.pathname.includes("planner");

    
   
    return(
        <>
        <div className="profile-header">
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
                formData={props.formData}
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
                <ModalAddplan onClose={() => setShow(false)} show={show} />
              </div>
            )}
          </div>
        </div></>
    )
}

export default HeaderDataProfile;