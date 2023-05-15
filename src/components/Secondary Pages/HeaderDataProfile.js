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
  // console.log(userToken);
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
  const [ownerData, setOwnerData] = useState([]);
  const [clientData, setClientData] = useState([]);
  const [plannerData, setPlannerData] = useState([]);
  const [plan, setplan] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState();
  const [whatsappUrl, setWhatsappUrl] = useState("");
  let message = "!";
  let whatsappNum = "0";
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
  const getownersHallsCard = (id) => {
    fetch(`http://127.0.0.1:8000/owner/auth/getAllOwnerHalls/${userToken.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken.token}`,
        "auth-token": `${userToken.token}`,
      },
      
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

  function deletePlan() {
    fetch(`https://fakestoreapi.com/products/${plan.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        window.location.reload();
      } else alert("Error Happened Please Try Again Later");
    });
  } 
  const urlWhatSap = () => {
    message = "Hello!";
    whatsappNum = userToken.phone;
    setWhatsappUrl(
      `https://api.whatsapp.com/send/?phone=${whatsappNum}&text=${message}&type=phone_number&app_absent=0`
    );
  };
  function handleClick() {
    navigate(`/hallForm`, { state: { data: userToken } });
  }
  console.log(userToken)
  function goToAddPlan() {
    navigate(`/addplan`, { state: { data: userToken } });
  }
  function goToEditProfile() {
    navigate(`/editProfile/${userToken.id}`, { state: { data: userToken } });
  }
  function handleReservations() {
    navigate(`/Bookings`, { state: { data: userToken } });
  }

  function handleLink() {
    window.location.href = whatsappUrl;
  }
  useEffect(() => {
    fetchPlannerData();
    fetchplan();
    fetchOwnerData();
    fetchClientData();

    urlWhatSap();
    if (userToken?.role === "owner") {
      getownersHallsCard(id);
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
              src={plan.image}
              alt={plan.title}
              className="banner-image"
              //  className="plan-image"
            />
            <div className="pad20">
              <h1> {plan.title}</h1>
              <p>{plan.description}</p>
            </div>
            <div className="button-wrapper">
              <Link
                to={`/Plandetails/${plan.id}`}
                className="btnForPlan outline"
              >
                DETAILS
              </Link>
            </div>
            <div>{isPlanner && <FaTrash onClick={deletePlan} />}</div>
          </div>
        </div>{" "}
        {/* <div className="plan" key={plan.id}>
          // <img src={plan.image} alt={plan.title} className="plan-image" />
          // {isPlanner && <FaTrash onClick={deletePlan} />}
          //{" "}
          <div className="plan-details">
            // <h3 className="plan-title">{plan.title}</h3>
            // <p className="plan-description">{plan.description}</p>
            // <p className="plan-price">// Price: {plan.price}$ // </p>
            //{" "}
          </div>
          //{" "}
        </div> */}
      </>
    );
  };
  return (
    <div className="contProfileAll">
      <div className="profile-header">
        <div className="cOntLeftData">
          <div className="divContImgType">
            <img
              src={userToken?.photo}
              alt="Profile"
              className="profile-image"
            />
            <p className="nameUser">{userToken?.role}</p>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">{userToken?.name}</h1>
            <p className="profile-bio">{userToken?.email}</p>
            <p className="profile-bio">{userToken?.phone}</p>
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
          <div className="planner-prof-btn-div">
            <button
              onClick={goToEditProfile}
              className="btn-flip add-hall-btn"
              data-back="Edit"
              data-front="Edit"
            ></button>
          </div>
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
                  onClick={handleReservations}
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

          {/* {isOwner && (
            <div className="planner-prof-btn-div">
              <Link
                onClick={() => setShow(true)}
                className="btn-flip"
                data-back="DeleteHall"
                data-front="DeleteHall"
                to="#"
              ></Link>
              <DeleteHall onClose={() => setShow(false)} show={show} />

            </div>
          )} */}
        </div>
      </div>
      {isAdmin && <Dashboard />}
      {isPlanner && (
        <>
          <h2 className="section-heading">Wedding Plans</h2>
          <div className="profile-content">
            {plan.slice(0, visible).map(renderCard)}
            <div className="for-button">
              {visible < plannerData.length && (
                <button className="more" onClick={loadMore}>
                  Load 5 More
                </button>
              )}
            </div>
          </div>
        </>
      )}

      {isOwner && (
        <div className="halls">
          <div className="home-allhalls-container">
            {ownersHallsCard.slice(0, visible).map((data, index) => (
              <HallCard key={index} userToken={userToken} hall={data} />
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
