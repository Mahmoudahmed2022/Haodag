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
                  // {userData && (userData?.photo)}
                  userData?.photo
                  // personData || userData ? personData?.photo : userData?.photo
                }
                alt="Profile"
                className="profile-image"
              />
              <p className="nameUser">
                 {userData?.role}
              </p>
            </div>
            <div className="profile-details">
              <h1 className="profile-name">
               {userData?.name}
              </h1>
              <p className="profile-bio">
                {userData?.email}
              </p>
              <p className="profile-bio">
                {userData?.phone}
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

        
        
        </div>
      </div>
      {userData?.role === "owner"&& (
        <Owners
          userData={userData}
        />
      )  }
      {userData?.role ==="planner" &&(
        <Planners
          Plan={plan}
          userData={userData}
        />
      )}
      {userData?.role === "user" && (
        <Users
          userData={userData}
        />
      ) }
      {userData?.role === "supplier"&& (
        <Services
        userData={userData}
        />
      )}
      
      

      {/* <Owners userData={userData} personData={personData}/>
      <Planners userData={userData} personData={personData}/> */}
    </>
  );
};

export default HeaderDataProfile;
