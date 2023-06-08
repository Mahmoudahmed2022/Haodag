import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../../Css/NavbarWithSideBar.css";
import "../../Css/App.css";

import { IconContext } from "react-icons";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import image2 from "../images/logo.png";
import { BiSearch } from "react-icons/bi";
import user from "../images/user.png";
import { useNavigate } from "react-router-dom";
import { GoDashboard } from "react-icons/go";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "./Redux";
import Swal from "sweetalert2";
function NavbarWithSideBar() {
  const personData = useContext(MyContext);
  console.log(personData);

  const [sidebar, setSidebar] = useState(false);
  const nav = useNavigate();
  const location = useLocation();
  const showSidebar = () => setSidebar(!sidebar);
  const [path, setPath] = useState(null);
  // if(path==="home"|| path===""){setPath("home")}
  // else if(path==="search"){setPath("search")}
  // else if (path === "weddingPlanners") {setPath("search")}
  // else if (path === "greatPackages") {setPath("greatPackages")}

  function handleLogout() {
    Swal.fire({
      title: `Will You  Logout  `,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
    }).then((data) => {
      if (data.isConfirmed) {
        fetch("http://127.0.0.1:8000/api/auth/logout", {
          method: "POST",
          headers: {
            "auth-token": `${personData.token}`,
          },
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
                alert("You Logged out");
                nav(`/`)

              
              console.log(response);
            } else {
              throw new Error("Logout failed.");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  }

  function goToPackages() {
    // setPath("greatPackages")
    nav(`/greatepackages`);
  }
  function goToHome() {
    // setPath("home")
    nav(`/`);
  }
  function goToSearchPage() {
    nav(`/search`);
  }
  function goToOwnerPlannerPage() {
    // setPath("WeddingPlanners")

    nav(`/WeddingPlanners`);
  }
  // useEffect(() => {
  //   if (personData.isLogin) {
  //     alert("You Logged out");
  //     nav(`/`);
  //   }
  // }, [personData.isLogin]);
  function goToProfile() {
    "/user/:name/:id"
    nav(`/user/${personData.role}/${personData.id}`,{state:{userData:personData}});
    // nav(`/${personData.role}/${personData.id}`,{state:{userData:personData}});
  }
  function goToTranslation() {
    nav(`/translation`);
  }
  
  return (
    <>
      <IconContext.Provider value={{}}>
        <div className="navbar">
          <div className="left">
          <Link className="advertisment" to="/">
                To Put Your Advertisement
              </Link>
            {/* <div className="svgColor1">
              <FaArrowCircleLeft className="bigger" onClick={() => nav(-1)} />
              <FaArrowCircleRight className="bigger" onClick={() => nav(1)} />
            </div> */}
            <div className="menu-bars">
              <FaAlignLeft className="svgColor" onClick={showSidebar} />
            </div>
           
          </div>
         
          {/* {!userData&&<div className="headerBtnsContainer">
            <button className="headerSignBtn">Login</button>
            <button className="headerSignBtn">Signup</button>
          </div>} */}
          <div className="right2">
          {(personData.isLogin||(personData.isLogin==="true")) ? (
                <div className="buttons-log-reg">
                  <button onClick={handleLogout} className="glow-on-hover">
                    Logout
                  </button>
                </div>
              ) : (
                <div className="buttons-log-reg">
                  <Link className="glow-on-hover" to="/login">
                    Login
                  </Link>
                  <Link className="glow-on-hover" to="/registration">
                    Sign Up
                  </Link>
                </div>
              )}
            {/* <div className="search-bar">
              <div className="search-bar-content">
                <Link className="search-stick">
                  <BiSearch className="svg10" />
                </Link>

                <div className="search-text-and-rect">
                  <div className="rect"></div>
                  <input className="input1" placeholder="Search or type" />
                </div>
              </div>
            </div> */}
            <div className="right">
              <div className="logo" onClick={goToHome}>
                <img className="avatar" src={image2} alt="" />
              </div>
            </div>
            {!personData.isLogin ? (
                  <div></div>

            ) : (
              <div onClick={goToProfile} className="profile-photo">
              <img src={user} alt="user pic" />
            </div>
            )}

            {/* <button className="aAll" onClick={handleLogout}>
              <AiIcons.AiOutlineLogout />
                <span className="svgColor">Logout</span>
              </button> */}
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle ">
              <div className="menu-bars svgColor hoverOnX">
                <AiIcons.AiOutlineClose />
              </div>
              <img
                src={image2}
                onClick={goToHome}
                className="avatar"
                alt="logo"
              ></img>
            </li>
            {personData.role === "admin" && (
              <li key="Admin" className="nav-text">
                <Link className="aAll  " to="/AdminDashboard">
                  <GoDashboard />
                  <span className="svgColor">Dashboard</span>
                </Link>
              </li>
            )}

            {/* {SidebarData.map((item, index) => {
  return (
                <li key={index} className={`${item.cName} `} >
                  <Link className="aAll  " to={item.path}>
                    {item.icon}
                    <span className="svgColor">{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
            <li
              className="nav-text"
              onClick={() => {
                setPath("home");
              }}
            >
              <button
                className="aAll transparentBorderN"
                onClick={() => {
                  setPath("home");
                  goToHome();
                }}
                style={{
                  backgroundColor: path === "home" ? "#ef9011" : "transparent",
                }}
              >
                <FaHome />
                <span className="svgColor">Home</span>
              </button>
            </li>

            <li
              className="nav-text"
              onClick={() => {
                setPath("greatepackages");
              }}
            >
              <button
                className="aAll transparentBorderN"
                onClick={() => {
                  setPath("home");
                  goToPackages();
                }}
                style={{
                  backgroundColor:
                    path === "greatepackages" ? "red" : "transparent",
                }}
              >
                <AiIcons.AiOutlineLogout />
                <span className="svgColor">Great Packages</span>
              </button>
            </li>

            <li
              className="nav-text"
              onClick={() => {
                setPath("WeddingPlanners");
              }}
            >
              <button
                className="aAll transparentBorderN"
                onClick={() => {
                  setPath("home");
                  goToOwnerPlannerPage();
                }}
                style={{
                  backgroundColor:
                    path === "WeddingPlanners" ? "red" : "transparent",
                }}
              >
                <AiIcons.AiOutlineLogout />
                <span className="svgColor">Owners & Planners</span>
              </button>
            </li>
            <li className="nav-text">
              <button
                className="aAll transparentBorderN"
                onClick={() => {
                  setPath("home");
                  goToSearchPage();
                }}
                style={{
                  backgroundColor: path === "search" ? "red" : "transparent",
                }}
              >
                <AiIcons.AiOutlineLogout />
                <span className="svgColor">Search For Halls</span>
              </button>
            </li>
            <li className="nav-text">
              <button
                className="aAll transparentBorderN"
                onClick={() => {
                  setPath("translation");
                  goToTranslation();
                }}
                style={{
                  backgroundColor: path === "search" ? "red" : "transparent",
                }}
              >
                <AiIcons.AiOutlineLogout />
                <span className="svgColor">translation</span>
              </button>
            </li>
            
            {personData.isLogin ? (
              <li className="nav-text">
                <button
                  className="aAll transparentBorderN"
                  onClick={handleLogout}
                >
                  <AiIcons.AiOutlineLogout />
                  <span className="svgColor">Logout</span>
                </button>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavbarWithSideBar;
