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

const HeaderDataProfile = (props) => {
  const location = useLocation();
  const userToken = location?.state?.data;
  const userData = location?.state?.userData;
  console.log(userData);
  console.log(userToken);
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
  const [plan, setplan] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState();
  const [whatsappUrl, setWhatsappUrl] = useState("");
  let message = "!";
  let whatsappNum = "0";

  // const fetchplans = () => {
  //   fetch(
  //     `http://127.0.0.1:8000/planner/auth/getAllPlannerPlans/${userToken.id}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${userToken.token}`,
  //         "auth-token": `${userToken.token}`,
  //       },
  //     }
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Data received from server:", data);
  //       setplan(data.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // };
  const fetchplans = () => {
    fetch(`http://127.0.0.1:8000/api/auth/getAllPlannerPlans/${userData.id}`, {
      method: "GET",
    })
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

  const getownersHallsCard = () => {
    fetch(`http://127.0.0.1:8000/owner/auth/getAllOwnerHalls/${userData.id}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setownersHallsCard(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  function deleteCourse(plan_Id) {
    fetch(`http://127.0.0.1:8000/planner/auth/deletePlan/${plan_Id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken.token}`,
        "auth-token": `${userToken.token}`,
      },
    }).then((res) => {
      if (res.ok) {
        alert("Plan deleted successfully");
        window.location.reload();
      } else alert("Error Happened Please Try Again Later");
    });
  }
  const urlWhatSap = () => {
    message = "Hello!";
    whatsappNum = userData.phone;
    setWhatsappUrl(
      `https://api.whatsapp.com/send/?phone=${whatsappNum}&text=${message}&type=phone_number&app_absent=0`
    );
  };
  function handleClick() {
    navigate(`/hallForm`, { state: { data: userToken } });
  }
  // console.log(userToken);
  function handleDetailsClick(plan_Id, plan) {
    navigate(`/Plandetails/${plan_Id}`, {
      state: {
        data: userToken,
        plan: plan,
      },
    });
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

  function handleLink() {
    window.location.href = whatsappUrl;
  }
  useEffect(() => {
    // fetchPlannerData();
    fetchplans();

    urlWhatSap();
    if (userToken?.role === "owner") {
      getownersHallsCard();
    }
  }, []);
  const loadMore = () => {
    setVisible(visible + 5);
  };
  const renderCard = (plan) => {
    return (
      <>
        <div className="planD" key={plan.id}>
          <div className="wrapper">
            {/* <div class="banner-image"> </div> */}
            <img
              src={plan.photos[0]}
              alt={plan.name}
              className="banner-image"
              //  className="plan-image"
            />
            <div className="pad20">
              <h1> {plan.name}</h1>
              <p>{plan.price}$</p>
            </div>
            <div className="button-wrapper">
              <button
                onClick={() => handleDetailsClick(plan.id, plan)}
                className="btnForPlan outline"
              >
                DETAILS
              </button>
            </div>
            <div>
              {isPlanner && (
                <FaTrash
                  className="delete"
                  onClick={() => deleteCourse(plan.id)}
                />
              )}
            </div>
          </div>
        </div>{" "}
      </>
    );
  };

  return (
    <div className="contProfileAll">
      <div className="profile-header">
        <div className="cOntLeftData">
          <div className="divContImgType">
            <img
              src={userData?.photo}
              alt="Profile"
              className="profile-image"
            />
            <p className="nameUser">{userData?.role}</p>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">{userData?.name}</h1>
            <p className="profile-bio">{userData?.email}</p>
            <p className="profile-bio">{userData?.phone}</p>
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
        </div>
      </div>

      {(userData.role === "planner" || userToken.role === "planner") && (
        <>
          <h1 className="section-heading">Wedding Plans</h1>
          <div className="profile-content">
            {plan.length > 0 ? (
              <>
                {plan.slice(0, visible).map(renderCard)}
                <div className="for-button">
                  {visible < plan.length && (
                    <button className="more" onClick={loadMore}>
                      Load 5 More
                    </button>
                  )}
                </div>
              </>
            ) : (
              <h2>No data</h2>
            )}
          </div>
        </>
      )}

      {userData.role === "owner" && (
        <div className="halls">
          <div className="home-allhalls-container">
            {ownersHallsCard.length > 0 ? (
              <>
                {ownersHallsCard.slice(0, visible).map((data, index) => (
                  <HallCard key={index} userToken={userData} hall={data} />
                ))}
                <div className="for-button">
                  {visible < ownersHallsCard.length && (
                    <button className="more" onClick={loadMore}>
                      Load 5 More
                    </button>
                  )}
                </div>
              </>
            ) : (
              <h2>No Data</h2>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderDataProfile;
