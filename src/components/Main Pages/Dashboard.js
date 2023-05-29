import React, { useEffect, useState } from "react";
import "../../Css/AdminDashboard.css";
import CategoreyInDashboard from "../Secondary Pages/Cards/CategoreyInDashboard";
import FetchAllData from "../Secondary Pages/FetchAllData";
import HallsRequests from "../Secondary Pages/Hall/HallsRequests";
import SidebarforAdminDashboard from "./SidebarforAdminDashboard";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  }, []);

  let content;
  if (selectedComponent === "client") {
    content = <FetchAllData person={client} />;
  } else if (selectedComponent === "hallOwner") {
    content = <FetchAllData person={hallOwner} />;
  } else if (selectedComponent === "weddingPlanner") {
    content = <FetchAllData person={weddingPlanner} />;
  } else if (selectedComponent === "hallsRequest") {
    content = <HallsRequests hallsRequest={hallsRequest} />;
  }else if (selectedComponent === "halls") {
    content = <FetchAllData person={halls} />;
  }
  else if (selectedComponent === "supplires") {
    content = <FetchAllData person={suppliers} />;
  }
  return (
    <div className="contSidebarWithDash">
      <div className="container">
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              Logo
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>

          <div className="alllinks">
          <button
              className="link"
              onClick={() => setSelectedComponent("halls")}
            >
              
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  <FaTh />
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
              onClick={() => setSelectedComponent("suppliers")}
            >
              
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  <FaTh />
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
              onClick={() => setSelectedComponent("hallOwner")}
            >
              
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  <FaTh />
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
              onClick={() => setSelectedComponent("weddingPlanner")}
            >
              
              {/* <NavLink to="/allhalls" className="link" > */}
              <div className="iconAndName">
                <div className="icon">
                  <FaTh />
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
              onClick={() => setSelectedComponent("client")}
            >
              
              <div className="iconAndName">
                <div className="icon">
                  <FaTh />
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
              className="link"
              onClick={() => setSelectedComponent("hallsRequest")}
            >
              
              <div className="iconAndName">
                <div className="icon">
                  <FaTh />
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
                  <FaTh />
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
