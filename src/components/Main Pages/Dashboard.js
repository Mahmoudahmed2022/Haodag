import React, { useEffect, useState } from "react";
import "../../Css/AdminDashboard.css";
import CategoreyInDashboard from "../Secondary Pages/Cards/CategoreyInDashboard";
import FetchAllData from "../Secondary Pages/FetchAllData";
import HallsRequests from "../Secondary Pages/Hall/HallsRequests";
import SidebarforAdminDashboard from "./SidebarforAdminDashboard";
import * as AiIcons from "react-icons/ai";
import owners from "../images/owners.png";
import "../../Css/CardForDashboard.css";
import planners from "../images/planners.png";
import supplier from "../images/suppliers.png";
import clients from "../images/users.png";
import packagePhoto from "../images/package.png";
import { useContext } from "react";
import { MyContext } from "./Redux";
import hallRequests from "../images/hallRequests.png";
import hallss from "../images/halls.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Owners from "../Secondary Pages/Owners";
import FetchHallsPlans from "../Secondary Pages/FetchHallsPlans";
import CardInDashboard from "../Secondary Pages/Cards/CardInDashboard";
import CardPackagesInDashboard from "../Secondary Pages/CardPackagesInDashboard";
import Swal from "sweetalert2";
const Dashboard = () => {
  const personData= useContext(MyContext);
  console.log(personData);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [client, setClient] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [weddingPlanner, setWeddingPlanner] = useState([]);
  const [hallOwner, setHallOwner] = useState([]);
  const [confirmedHalls, setConfirmedHalls] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [offers, setOffers] = useState([]);
  const [allPlans, setAllPlans] = useState([]);
  const [canceledHalls, setCanceledHalls] = useState([]);
  const [allHalls, setAllHalls] = useState([]);
  const [allPackages, setAllPackages] = useState([]);
  const [hallsRequest, sethallsRequest] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const nav = useNavigate();
  
  
  const getAdmins = () => {
    if (admins?.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://127.0.0.1:8000/admin/auth/getAllAdmins", {
        headers: {
          "auth-token": `${personData.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setAdmins(data.data));
    }
  };

  const getClients = () => {
    if (client?.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://127.0.0.1:8000/admin/auth/getAllUsers", {
        headers: {
          "auth-token": `${personData.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setClient(data.data));
    }
  };
  const getSuppliers = () => {
    if (suppliers?.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://127.0.0.1:8000/admin/auth/getAllSuppliers", {
        headers: {
          "auth-token": `${personData.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setSuppliers(data.data));
    }
  };
  const getHallOwner = () => {
    if (hallOwner?.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://127.0.0.1:8000/admin/auth/getAllOwners", {
        headers: {
          "auth-token": `${personData.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setHallOwner(data.data));
    }
  };
  const getAllPackages = () => {
    if (allPackages?.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://localhost:8000/api/auth/Offers", {
        headers: {
          "auth-token": `${personData.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setAllPackages(data.data));
    }
  };
  const getAllPlans = () => {
    if (allPlans?.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://localhost:8000/planner/auth/getAllPlans", {
        headers: {
          "auth-token": `${personData.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setAllPlans(data.data));
    }
  };
  const getAllHalls = () => {
    if (allHalls?.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://localhost:8000/admin/auth/getAllHalls", {
        headers: {
          "auth-token": `${personData.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setAllHalls(data.data));
    }
  };
  const getConfirmedAllHalls = () => {
    if (confirmedHalls?.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://localhost:8000/admin/auth/getConfirmedHalls", {
        headers: {
          "auth-token": `${personData.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setConfirmedHalls(data.data));
    }
  };
  const getCanceledAllHalls = () => {
    if (canceledHalls?.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://localhost:8000/admin/auth/getCanceledHalls", {
        headers: {
          "auth-token": `${personData.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setCanceledHalls(data.data));
    }
  };
  const getWeddingPlanner = () => {
    if (weddingPlanner?.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://localhost:8000/admin/auth/getAllPlanners", {
        headers: {
          "auth-token": `${personData.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setWeddingPlanner(data.data));
    }
  };
  const allHallsRequest = () => {
    if (hallsRequest?.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://localhost:8000/admin/auth/getUnConfirmedHalls", {
        headers: {
          "auth-token": `${personData.token}`,
          Authorization: `Bearer ${personData.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => sethallsRequest(data.data));
    }
  };

  const addPackage = () => {
    nav("/addpackage");
  };
  const addAdmin = () => {
    nav("/addadmin");
  };
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  function handleLogout(e) {
e.preventDefault();
    Swal.fire({
      title: `Will You  Logout  `,
      icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Logout",
    cancelButtonText: "Cancel",
    }).then((data) => {if (data.isConfirmed) {
      fetch("http://127.0.0.1:8000/api/auth/logout", {
        method: "POST",
        headers:{
          "auth-token":`${personData.token}`
        }
      })
        .then((response) => {
          if (response.ok) {
            
            personData.setIsLogin(false);
            personData.setName("");
            personData.setEmail("");
            personData.setRole("");
            personData.setToken("");
            personData.setCountry("");
            personData.setGender("");
            personData.setPhone("");
            personData.setPhoto("");
            personData.setReligion("");
            personData.setId("");
            // if (!personData.isLogin) {
            //   alert("You Logged out");
            //   nav(`/`)
              
            // }
            if (personData.isLogin) {
              alert("You Logged out");
              nav(`/`);
              // window.location.reload();
            }
            console.log(response)
          } else {
            throw new Error("Logout failed.");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }}
   
  )}

  const goToHome = () => {
    nav("/");
  };

  let content;
  if (selectedComponent === "client") {
    content = (
      <FetchAllData user={client} getUser={getClients} personData={personData} />
    );
  }else if (selectedComponent === "admin") {
    content = (
      <FetchAllData
        user={admins}
        getUser={getAdmins}
        personData={personData}
      />
    );
  }
    else if (selectedComponent === "hallOwner") {
    content = (
      <FetchAllData
        user={hallOwner}
        getUser={getHallOwner}
        personData={personData}
      />
    );
  } else if (selectedComponent === "weddingPlanner") {
    content = (
      <FetchAllData
        user={weddingPlanner}
        getUser={getWeddingPlanner}
        personData={personData}
      />
    );
  } else if (selectedComponent === "hallsRequest") {
    content = (
      <HallsRequests hallsRequest={hallsRequest} personData={personData} />
    );
  } else if (selectedComponent === "packages") {
    content = <CardPackagesInDashboard user={allPackages} personData={personData} />;
  } else if (selectedComponent === "allHalls") {
    content = <FetchHallsPlans user={allHalls} personData={personData} />;
  } else if (selectedComponent === "allPlans") {
    content = <FetchHallsPlans user={allPlans} personData={personData} />;
  } else if (selectedComponent === "confirmedHalls") {
    content = <FetchHallsPlans user={confirmedHalls} personData={personData} />;
  } else if (selectedComponent === "canceledhalls") {
    content = <FetchHallsPlans user={canceledHalls} personData={personData} />;
  } else if (selectedComponent === "offers") {
    content = <FetchAllData user={offers} personData={personData} />;
  } else if (selectedComponent === "suppliers") {
    content = (
      <FetchAllData
        user={suppliers}
        getUser={getSuppliers}
        personData={personData}
      />
    );
  }
  // useEffect(() => {
  //   if (!personData.isLogin) {
  //     alert("You Logged out");
  //     nav(`/`);
  //   }
  // }, [personData.isLogin]);
  useEffect(() => {
    // getOffers();
    getAdmins();
    getClients();
    getWeddingPlanner();
    getHallOwner();
    allHallsRequest();
    getConfirmedAllHalls();
    getSuppliers();
    getCanceledAllHalls();
    getAllHalls();
    setSelectedComponent();
    getAllPackages();
    getAllPlans();
  }, []);
  console.log("suppliers", suppliers);
  console.log("AllHalls", allHalls);
  console.log("ALLAdmins", admins);
  console.log("AllPlans", allPlans);
  console.log("confirmedHalls", confirmedHalls);
  console.log("canceledHalls", canceledHalls);
  console.log("owners", hallOwner);
  console.log("planners", weddingPlanner);
  console.log("clients", client);
  console.log("hallrequset", hallsRequest);
  console.log("allPackages", allPackages);
  return (
    <div className="contSidebarWithDash">
      <div className="container">
        <div style={{ width: isOpen ? "250px" : "80px" }} className="sidebar">
          <div className="top_section">
            <img
              style={{ display: isOpen ? "block" : "none" }}
              onClick={goToHome}
              className="avatar"
              src={logo}
              alt="logo"
            ></img>
           
            <div
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>

          <div className="alllinks">
            <button
              style={{
                backgroundColor:
                  selectedComponent === "hallsRequest" ? "red" : "transparent",
              }}
              className="link"
              onClick={() => setSelectedComponent("hallsRequest")}
            >
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img
                    className="widthIcon"
                    src={hallRequests}
                    alt="hallRequests"
                  ></img>
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Hall Requests <p>{hallsRequest?.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>

            <button
              style={{
                backgroundColor:
                  selectedComponent === "packages" ? "red" : "transparent",
              }}
              className="link"
              onClick={() => setSelectedComponent("packages")}
            >
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img
                    className="widthIcon"
                    src={packagePhoto}
                    alt="packages"
                  ></img>
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Packages <p>{allPackages?.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>

            <button
              style={{
                backgroundColor:
                  selectedComponent === "allHalls" ? "red" : "transparent",
              }}
              className="link"
              onClick={() => setSelectedComponent("allHalls")}
            >
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img className="widthIcon" src={hallss} alt="halls"></img>
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  All Halls <p>{allHalls?.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>

            <button
              style={{
                backgroundColor:
                  selectedComponent === "allPlans" ? "red" : "transparent",
              }}
              className="link"
              onClick={() => setSelectedComponent("allPlans")}
            >
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img className="widthIcon" src={hallss} alt="plans"></img>
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  All Plans <p>{allPlans?.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>
            <button
              style={{
                backgroundColor:
                  selectedComponent === "confirmedHalls"
                    ? "red"
                    : "transparent",
                  
              }}
              className="link"
              onClick={() => setSelectedComponent("confirmedHalls")}
            >
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img className="widthIcon" src={hallss} alt="halls"></img>
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Confirmed Halls <p>{confirmedHalls?.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>
            <button
              style={{
                backgroundColor:
                  selectedComponent === "canceledhalls" ? "red" : "transparent",
              }}
              className="link"
              onClick={() => setSelectedComponent("canceledhalls")}
            >
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img className="widthIcon" src={hallss} alt="halls"></img>
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Canceled Halls <p>{canceledHalls?.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>
            <button
              className="link"
              style={{
                backgroundColor:
                  selectedComponent === "admin" ? "red" : "transparent",
              }}
              onClick={() => setSelectedComponent("admin")}
            >
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img
                    className="widthIcon"
                    src={supplier}
                    alt="admin"
                  ></img>
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  All Admins <p>{admins?.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>


            <button
              className="link"
              style={{
                backgroundColor:
                  selectedComponent === "suppliers" ? "red" : "transparent",
              }}
              onClick={() => setSelectedComponent("suppliers")}
            >
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img
                    className="widthIcon"
                    src={supplier}
                    alt="suppliers"
                  ></img>
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  All Suppliers <p>{suppliers?.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>

            <button
              className="link"
              style={{
                backgroundColor:
                  selectedComponent === "hallOwner" ? "red" : "transparent",
              }}
              onClick={() => setSelectedComponent("hallOwner")}
            >
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img className="widthIcon" src={owners} alt="owners"></img>
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  All Owners <p>{hallOwner?.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>

            <button
              className="link"
              style={{
                backgroundColor:
                  selectedComponent === "weddingPlanner"
                    ? "red"
                    : "transparent",
              }}
              onClick={() => setSelectedComponent("weddingPlanner")}
            >
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img
                    className="widthIcon"
                    src={planners}
                    alt="planners"
                  ></img>
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  All Planners <p>{weddingPlanner?.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>

            <button
              className="link"
              style={{
                backgroundColor:
                  selectedComponent === "client" ? "red" : "transparent",
              }}
              onClick={() => setSelectedComponent("client")}
            >
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img className="widthIcon" src={clients} alt="clients"></img>
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  All Clients <p>{client?.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>

            <button className="link" onClick={handleLogout}>
              <div className="iconAndName">
                <div className="icon">
                  <AiIcons.AiOutlineLogout />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Logout
                </div>
              </div>
              {/* </NavLink> */}
            </button>
          </div>
        </div>
      </div>

      {/* <SidebarforAdminDashboard/> */}
      <div className="parentDashboard">
        <h1 className="adminHeader"> Admin Dashboard</h1>
        <div className="categories"></div>

        <div className="ContCardsDashboard">
        <CardInDashboard number={client?.length} name="Clients"backColor="#0f0f0f"/>
          <CardInDashboard number={weddingPlanner?.length} name="Planners"backColor="#0f0f0f"/>
          <CardInDashboard number={hallOwner?.length} name="Hall Owners"backColor="#0f0f0f"/>
          <CardInDashboard number={suppliers?.length} name="Suppliers"backColor="#0f0f0f"/>
          <CardInDashboard number={allHalls?.length} name="Halls" backColor="#c38213"/>
          <CardInDashboard number={allPlans?.length} name="Plans"backColor="#c38213"/>
          <CardInDashboard number={allPackages?.length} name="add package"backColor="#c38213" addPackage={addPackage}/>
          <CardInDashboard number={admins?.length} name="add admin"backColor="#c38213" addPackage={addAdmin}/>




        </div>
        {/* <button onClick={addPackage}>add package</button>
        <button onClick={addAdmin}>add admin</button> */}
        <div className="usersmap">{content}</div>
      </div>
    </div>
  );
};

export default Dashboard;
