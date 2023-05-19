import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTrash, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "../../Css/ClientProfile.scss";
import "../../Css/MainProfileForAllUsers.css";
import "../../Css/ProfileData.css";
import ModalAddplan from "../Secondary Pages/Modals/ModalAddplan";
import ModalEditClientProfile from "../Secondary Pages/Modals/ModalEditClientProfile";
import kariem from "../images/user.png";
import Dashboard from "../Main Pages/Dashboard.js";
import axios from "axios";
import { useEffect } from "react";
import Cards from "./Cards/Cards";
import HallCard from "./Cards/HallCard";
import Owners from "./Owners";
import Planners from "./Planners";
import NavbarWithSideBar from "../Main Pages/NavbarWithSideBar";
import userEvent from "@testing-library/user-event";

const HeaderDataProfile = (props) => {
  const location = useLocation();
    const isLogin = location?.state?.isLogin;

  const userToken = location?.state?.data;
  const userData = location?.state?.userData;

  console.log(isLogin);
  // const { userToken } = location.state.data;

  const isAdmin = userToken?.role === "admin";
  const isPlanner = userToken?.role === "planner";
  const isOwner = userToken?.role === "owner";
  const isClient = userToken?.role === "user";
  const [show, setShow] = useState(false);
  const [showDeletePlan, setShowDeletePlan] = useState(false);
  const [ownersHallsCard, setownersHallsCard] = useState([]);
  const [hall, setHall] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [visible, setVisible] = useState(5);
  let { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState();

  function handleClick() {
    navigate(`/hallForm`, { state: { data: userToken } });
  }
 
  function goToAddPlan() {
    navigate(`/addplan`, { state: { data: userToken } });
  }
  function goToAddPackage() {
    navigate(`/addpackage`, { state: { data: userToken } });
  }
  function goDashboard() {
    navigate(`/AdminDashboard`, { state: { data: userToken } });
  }
  function goToEditProfile() {
    navigate(`/editProfile/${userToken.id}`, {
      state: { data: userToken },
    });
  }
  function handleReservations() {
    navigate(`/Bookings`, { state: { data: userToken } });
  }
  function handlePlansRequsts() {
    navigate(`/PlansRequests`, { state: { data: userToken } });
  }
  function handlePlansBookings() {
    navigate(`/PlansBookings`, { state: { data: userToken } });
  }
  function handleHallsBookings() {
    navigate(`/HallsBookings`, { state: { data: userToken } });
  }

 
  console.log(isLogin)
  useEffect(()=>{

    window.scrollTo({ top: 0, behavior: "smooth" });

  },[])

  return (
    <>
    <NavbarWithSideBar userData={userData} isLogin={isLogin} userToken={userToken}/>
    <div className="contProfileAll">
      <div className="profile-header">
        <div className="cOntLeftData">
          <div className="divContImgType">
            <img
              src={isLogin?(userToken?.photo):(userData?.photo)}
              alt="Profile"
              className="profile-image"
            />
            <p className="nameUser">{isLogin?(userToken?.role):(userData?.role)}</p>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">{isLogin?(userToken?.name):(userData?.name)}</h1>
            <p className="profile-bio">{isLogin?(userToken?.email):(userData?.email)}</p>
            <p className="profile-bio">{isLogin?(userToken?.phone):(userData?.phone)}</p>
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
        </div>

        <div className="btnsPlannerProf">
         {userToken ? (
          <>
          {/* edit */}
          {userToken?.role && (
            <div className="planner-prof-btn-div">
              <button
                onClick={goToEditProfile}
                className="btn-flip add-hall-btn"
                data-back="Edit"
                data-front="Edit"
              ></button>
            </div>
          )}
          {/* admindashboard */}
          {isAdmin && (
            <>
              <div className="planner-prof-btn-div">
                <button
                  onClick={goDashboard}
                  className="btn-flip add-hall-btn"
                  data-back="Dashboard"
                  data-front="Dashboard"
                  to="#"
                ></button>
              </div>
              <div className="planner-prof-btn-div">
                <button
                  onClick={goToAddPackage}
                  className="btn-flip add-hall-btn"
                  data-back="Add Package"
                  data-front="Add Package"
                  to="#"
                ></button>
              </div>
            </>
          )}
          {/* client booking */}
          {isClient && (
            <>
              <div className="planner-prof-btn-div">
                <button
                  onClick={handlePlansBookings}
                  className="btn-flip add-hall-btn"
                  data-back="Plans Bookings"
                  data-front="plans Bookings"
                  to="#"
                ></button>
              </div>
              <div className="planner-prof-btn-div">
                <button
                  onClick={handleHallsBookings}
                  className="btn-flip add-hall-btn"
                  data-back="Halls Bookings"
                  data-front="Halls Bookings"
                  to="#"
                ></button>
              </div>
            </>
          )}
          {/* planner */}
          {isPlanner && (
            <>
              <div className="planner-prof-btn-div">
                <button
                  onClick={goToAddPlan}
                  className="btn-flip add-hall-btn"
                  data-back="AddPlan"
                  data-front="AddPlan"
                ></button>
              </div>
              <div className="planner-prof-btn-div">
                <button
                  onClick={handlePlansRequsts}
                  className="btn-flip reservation-btn add-hall-btn"
                  data-back="Requests"
                  data-front="Requests"
                ></button>
              </div>
            </>
          )}
          {/* owner */}
          {isOwner && (
            <>
              <div className="planner-prof-btn-div">
                <button
                  onClick={handleClick}
                  className="btn-flip add-hall-btn"
                  data-back="AddHall"
                  data-front="AddHall"
                ></button>

                {/* <HallForm2 onClose={() => setShow(false)} show={show} /> */}
              </div>
              <div className="planner-prof-btn-div">
                <button
                  onClick={handleReservations}
                  className="btn-flip reservation-btn add-hall-btn"
                  data-back="Bookings"
                  data-front="Bookings"
                ></button>
                {/* <HallForm2 onClose={() => setShow(false)} show={show} /> */}
              </div>
            </>
          )}

          </>
         ):
         (
          <></>
         )}
          
        </div>
      </div>
{isLogin ?(
  <>
      <Owners userData={userToken} userToken={userToken} isLogin={isLogin}/>
      <Planners userData={userToken} userToken={userToken} isLogin={isLogin}/>
  </>
      
):(
  <>
  <     Owners userData={userData} userToken={userToken}/>
      <Planners userData={userData} userToken={userToken}/>
  </>
  
)}
      


      
    </div>
    </>
  );
};

export default HeaderDataProfile;
