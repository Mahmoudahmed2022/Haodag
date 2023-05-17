import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../../Css/NavbarWithSideBar.css";
import { IconContext } from "react-icons";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import image2 from "../images/logo.png";
import { BiSearch } from "react-icons/bi";
import user from "../images/user.png";
import "../../Css/App.css";
import { useNavigate } from "react-router-dom";
import { GoDashboard } from "react-icons/go";
import { useEffect } from "react";

function NavbarWithSideBar() {
  const [sidebar, setSidebar] = useState(false);
  const nav = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);

  const location = useLocation();
  const userToken = location?.state?.data;
console.log(userToken)
const IsAdmin = userToken?.role==="admin"
 const [isLoggedOut, setIsLoggedOut] = useState(false);

  function handleLogout() {
    fetch("http://127.0.0.1:8000/api/auth/logout", {
      method: "POST",
      headers:{
        "auth-token":`${userToken.token}`
      }
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
      window.location.reload()
      
    }
  }, [isLoggedOut]);
  return (
    <>
      <IconContext.Provider value={{}}>
        <div className="navbar">
          <div className="left">
            <div className="svgColor1">
              <FaArrowCircleLeft className="bigger" onClick={() => nav(-1)} />
              <FaArrowCircleRight className="bigger" onClick={() => nav(1)} />
            </div>
            <Link className="menu-bars">
              <FaAlignLeft className="svgColor" onClick={showSidebar} />
            </Link>
          </div>
          {/* {!userData&&<div className="headerBtnsContainer">
            <button className="headerSignBtn">Login</button>
            <button className="headerSignBtn">Signup</button>
          </div>} */}
          <div className="right2">
            <div className="search-bar">
              <div className="search-bar-content">
                <Link className="search-stick">
                  <BiSearch className="svg10" />
                </Link>

                <div className="search-text-and-rect">
                  <div className="rect"></div>
                  <input className="input1" placeholder="Search or type" />
                </div>
              </div>
            </div>
            <div className="right">
              <Link className="logo" >
                <img className="avatar" src={image2} alt="" />
              </Link>
            </div>
            <div onClick={()=>nav(`/${userToken.role}/${userToken.id}`,{state:{data:userToken}})}  className="profile-photo">
              <img src={user} alt="user pic" />
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle ">
              <Link to="#" className="menu-bars svgColor hoverOnX">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {IsAdmin&&(
              <li key="Admin" className="nav-text" >
              <Link className="aAll  " to="/AdminDashboard">
              <GoDashboard />
                <span className="svgColor">Dashboard</span>
              </Link>
            </li>
            )}
            
              {SidebarData.map((item, index) => {
  return (
                <li key={index} className={`${item.cName} `} >
                  <Link className="aAll  " to={item.path}>
                    {item.icon}
                    <span className="svgColor">{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li  className="nav-text" >
              <button className="aAll" onClick={handleLogout}>
              <AiIcons.AiOutlineLogout />
                <span className="svgColor">Logout</span>
              </button>
            </li>
            
            {/* {SidebarBottomData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavbarWithSideBar;
