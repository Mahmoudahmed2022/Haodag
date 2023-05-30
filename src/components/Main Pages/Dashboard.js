import React, { useEffect, useState } from "react";
import "../../Css/AdminDashboard.css";
import CategoreyInDashboard from "../Secondary Pages/Cards/CategoreyInDashboard";
import FetchAllData from "../Secondary Pages/FetchAllData";
import HallsRequests from "../Secondary Pages/Hall/HallsRequests";
import SidebarforAdminDashboard from "./SidebarforAdminDashboard";
import * as AiIcons from "react-icons/ai";
import owners from "../images/owners.png";

import planners from "../images/planners.png";
import supplier from "../images/suppliers.png";
import clients from "../images/users.png";
import hallRequests from "../images/hallRequests.png";
import hallss from "../images/halls.png";


import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.png"
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
const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [client, setClient] = useState([]);
  const [weddingPlanner, setWeddingPlanner] = useState([]);
  const [hallOwner, setHallOwner] = useState([]);
  const [halls, setHalls] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  const [hallsRequest, sethallsRequest] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const nav = useNavigate();
  const location = useLocation();
  const userToken = location?.state?.data;
console.log(userToken)

  const getClients = () => {
    if (client.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://127.0.0.1:8000/admin/auth/getAllUsers", {
        headers: {
          "auth-token": `${userToken.token}`
        }
      })
        .then((res) => res.json())
        .then((data) => setClient(data.data));
    }
  };
  const getSuppliers = () => {
    if (suppliers.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://127.0.0.1:8000/admin/auth/getAllSuppliers", {
        headers: {
          "auth-token": `${userToken.token}`
        }
      })
        .then((res) => res.json())
        .then((data) => setSuppliers(data.data));
    }
  };
  const getHallOwner = () => {
    if (hallOwner.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://127.0.0.1:8000/admin/auth/getAllOwners", {
        headers: {
          "auth-token": `${userToken.token}`
        }
      })
        .then((res) => res.json())
        .then((data) => setHallOwner(data.data));
    }
  };
  const getAllHalls = () => {
    if (hallOwner.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://localhost:8000/admin/auth/getAllHalls", {
        headers: {
          "auth-token": `${userToken.token}`
        }
      })
        .then((res) => res.json())
        .then((data) => setHalls(data.data));
    }
  };
  console.log("suppliers",suppliers)
  console.log("halls",halls)
  console.log("owners",hallOwner)
  console.log("planners",weddingPlanner)
  console.log("clients",client)
  console.log("hallrequset",hallsRequest)


  const getWeddingPlanner = () => {
    if (weddingPlanner.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://localhost:8000/admin/auth/getAllPlanners", {
        headers: {
          "auth-token": `${userToken.token}`
        }
      })
        .then((res) => res.json())
        .then((data) => setWeddingPlanner(data.data));
    }
  };
  const allHallsRequest = () => {
    if (hallsRequest.length === 0) {
      // check if hall owner data has already been fetched
      fetch("http://localhost:8000/admin/auth/getUnConfirmedHalls", {
        headers: {
          "auth-token": `${userToken.token}`,
          "Authorization":`Bearer ${userToken.token}`
        }
      })
        .then((res) => res.json())
        .then((data) => sethallsRequest(data.data));
    }
  };
 
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  function handleLogout() {
    fetch("http://127.0.0.1:8000/api/auth/logout", {
      method: "POST",
      headers: {
        "auth-token": `${userToken.token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsLoggedOut(true);
        } else {
          throw new Error("Logout failed.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    if (isLoggedOut) {
      alert("You Logged out");
      nav(`/`, { state: { userToken: userToken } });
    }
  }, [isLoggedOut]);
  useEffect(() => {
    getClients();
    getWeddingPlanner();
    getHallOwner();
    allHallsRequest();
    getAllHalls();
    getSuppliers();

    setSelectedComponent();



  }, []);
const goToHome=()=>{
nav("/",{state:{userToken:userToken}})
}    

  let content ;
  if (selectedComponent === "client") {
    content = <FetchAllData user={client} getUser={getClients} userToken={userToken} />;
  } else if (selectedComponent === "hallOwner") {
    content = <FetchAllData user={hallOwner} getUser={getHallOwner}  userToken={userToken} />;
  } else if (selectedComponent === "weddingPlanner") {
    content = <FetchAllData user={weddingPlanner} getUser={getWeddingPlanner} userToken={userToken} />;
  } else if (selectedComponent === "hallsRequest") {
    content = <HallsRequests hallsRequest={hallsRequest} userToken={userToken} />;
  }else if (selectedComponent === "halls") {
    content = <FetchAllData user={halls} userToken={userToken} />;
  }
  else if (selectedComponent === "suppliers") {
    content = <FetchAllData user={suppliers} getUser={getSuppliers} userToken={userToken} />;
  }
  return (
    <div className="contSidebarWithDash">
      <div className="container">
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
          <div className="top_section">
            <img style={{ display: isOpen ? "block" : "none" }}
            onClick={goToHome}
             className="avatar" src={logo} alt="logo"></img>
            {/* <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              Logo
            </h1> */}
            <div
              // style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>

          <div className="alllinks">
          <button
          style={{backgroundColor:selectedComponent==="halls"?"red":"transparent"}}
              className="link"
              onClick={() => setSelectedComponent("halls")}
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
                  All Halls <p>{halls.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>
            <button
              className="link"
              style={{backgroundColor:selectedComponent==="suppliers"?"red":"transparent"}}
              onClick={() => setSelectedComponent("suppliers")}
            >
              
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img className="widthIcon" src={supplier} alt="suppliers" ></img>

                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  All Suppliers <p>{suppliers.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>

            <button
              className="link"
              style={{backgroundColor:selectedComponent==="hallOwner"?"red":"transparent"}}

              onClick={() => setSelectedComponent("hallOwner")}
            >
              
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img className="widthIcon" src={owners} alt="owners" ></img>

                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  All Owners <p>{hallOwner.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>

            <button
              className="link"
              style={{backgroundColor:selectedComponent==="weddingPlanner"?"red":"transparent"}}

              onClick={() => setSelectedComponent("weddingPlanner")}
            >
              
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img className="widthIcon" src={planners} alt="planners" ></img>

                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  All Planners <p>{weddingPlanner.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>

            <button
              className="link"
              style={{backgroundColor:selectedComponent==="client"?"red":"transparent"}}

              onClick={() => setSelectedComponent("client")}
            >
              
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img className="widthIcon" src={clients} alt="clients" ></img>

                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  All Clients <p>{client.length}</p>
                </div>
              </div>
              {/* </NavLink> */}
            </button>

            <button
            style={{backgroundColor:selectedComponent==="hallsRequest"?"red":"transparent"}}
            
              className="link"
              onClick={() => setSelectedComponent("hallsRequest")}
            >
              
              <div className="iconAndName">
                <div className="icon">
                  {/* <FaTh /> */}
                  <img className="widthIcon" src={hallRequests} alt="hallRequests" ></img>

                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Hall Requests <p>{hallsRequest.length}</p>
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
        <div className="categories">
          {/* <Link to="/allhalls" onClick={() => setSelectedComponent("weddingPlanner")}>
          <GetAllHalls weddingPlanner={weddingPlanner}/>
         
        </Link> */}

          {/* <button onClick={() => setSelectedComponent("weddingPlanner")}>
          <CategoreyInDashboard
            className="carduser"
            weddingPlanner={weddingPlanner}
          />
        </button>
        <button onClick={() => setSelectedComponent("hallOwner")}>
          <CategoreyInDashboard className="carduser" hallOwner={hallOwner} />
        </button>
        <button onClick={() => setSelectedComponent("client")}>
          <CategoreyInDashboard className="carduser" client={client} />
        </button>
        <button onClick={() => setSelectedComponent("hallsRequest")}>
          <CategoreyInDashboard
            className="carduser"
            hallsRequest={hallsRequest}
          />
        </button> */}
        </div>
        <div className="usersmap">{content}</div>
      </div>
    </div>
  );
};

export default Dashboard;
