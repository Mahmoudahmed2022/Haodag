import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTrash, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "../../Css/ClientProfile.scss";
import "../../Css/MainProfileForAllUsers.css";
import "../../Css/ProfileData.css";

import { useEffect } from "react";
import Owners from "./Owners";
import Planners from "./Planners";
import NavbarWithSideBar from "../Main Pages/NavbarWithSideBar";
import { useContext } from "react";
import { MyContext } from "../Main Pages/Redux";
import Users from "./Users";
import Services from "./Services";
const HeaderDataProfile = (props) => {
  const location = useLocation();
  const [plan, setplan] = useState([]);

  const personData = useContext(MyContext);
  const userData = location?.state?.userData;

  const isAdmin = (personData?.role || personData?.role) === "admin";
  const isPlanner = (personData?.role || personData?.role) === "planner";
  const isOwner = (personData?.role || personData?.role) === "owner";
  const isClient = (personData?.role || personData?.role) === "user";
  const isSupplier = (personData?.role || personData?.role) === "supplier";

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/hallForm`);
  }

  function goToAddPlan() {
    navigate(`/addplan`, { state: { data: personData } });
  }
  function goToAddService() {
    navigate(`/addservice`, { state: { data: personData } });
  }
  function goToAddPackage() {
    navigate(`/addpackage`);
  }
  function goDashboard() {
    navigate(`/AdminDashboard`);
  }
  function goToEditProfile() {
    navigate(`/editProfile/${personData.id}`);
  }
  function handleReservations() {
    navigate(`/Bookings`);
  }
  function handlePlansRequsts() {
    navigate(`/PlansRequests`);
  }
  function handlePlansBookings() {
    navigate(`/PlansBookings`);
  }
  function handleHallsBookings() {
    navigate(`/HallsBookings`);
  }
  console.log(personData);
  useEffect(() => {
    window.scrollTo({ behavior: "smooth" });
    fetchplans();
  }, []);

  const fetchplans = () => {
    fetch(
      `http://127.0.0.1:8000/api/auth/getAllPlannerPlans/${personData.id}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setplan(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <>
      <NavbarWithSideBar />
      <div className="contProfileAll">
        <div className="profile-header">
          <div className="cOntLeftData">
            <div className="divContImgType">
              <img
                src={
                  personData || userData ? personData?.photo : userData?.photo
                }
                alt="Profile"
                className="profile-image"
              />
              <p className="nameUser">
                {personData || userData ? personData?.role : userData?.role}
              </p>
            </div>
            <div className="profile-details">
              <h1 className="profile-name">
                {personData || userData ? personData?.name : userData?.name}
              </h1>
              <p className="profile-bio">
                {personData || userData ? personData?.email : userData?.email}
              </p>
              <p className="profile-bio">
                {personData || userData ? personData?.phone : userData?.phone}
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
          </div>

          <div className="btnsPlannerProf">
            {personData ? (
              <>
                {/* edit */}
                {personData?.role && (
                  <div className="planner-prof-btn-div">
                    <button
                      onClick={goToEditProfile}
                      className="btn-flip add-hall-btn"
                      data-back="Edit"
                      data-front="Edit"
                    ></button>
                  </div>
                )}
                {isSupplier && (
                  <>
                    <div className="planner-prof-btn-div">
                      <button
                        onClick={goToAddService}
                        className="btn-flip add-hall-btn"
                        data-back="Add Service"
                        data-front="Add Service"
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
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {personData?.role === "owner" || userData?.role === "owner" ? (
        <Owners
          userData={personData}
          personData={personData}
          isLogin={personData.isLogin}
        />
      ) : (
        <Planners
          Plan={plan}
          userData={personData}
          personData={personData}
          isLogin={personData.isLogin}
        />
      )}
      {personData?.role === "user" || userData?.role === "user" ? (
        <Users
          userData={personData}
          userToken={personData}
          isLogin={personData.isLogin}
        />
      ) : null}
      {personData?.role === "supplier" || userData?.role === "supplier" ? (
        <Services
          userData={personData}
          userToken={personData}
          isLogin={personData.isLogin}
        />
      ) : null}

      {/* <Owners userData={userData} personData={personData}/>
      <Planners userData={userData} personData={personData}/> */}
    </>
  );
};

export default HeaderDataProfile;
