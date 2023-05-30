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
import { FaHome } from "react-icons/fa";

function NavbarWithSideBar({isLogin,userToken}) {
  const [sidebar, setSidebar] = useState(false);
  const nav = useNavigate();
  const location = useLocation();
  const showSidebar = () => setSidebar(!sidebar);
const [path,setPath]=useState(null);
// if(path==="home"|| path===""){setPath("home")}
// else if(path==="search"){setPath("search")}
// else if (path === "weddingPlanners") {setPath("search")}
// else if (path === "greatPackages") {setPath("greatPackages")}


console.log(userToken)
 const [isLoggedOut, setIsLoggedOut] = useState(false);

console.log(userToken);
const IsAdmin = userToken?.role==="admin";
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

function goToPackages(){
  // setPath("greatPackages")
  nav(`/greatepackages`,{state:{userToken:userToken,islogin:isLogin}})
}
function goToHome(){
  // setPath("home")
  nav(`/`,{state:{userToken:userToken,islogin:isLogin}})
}
function goToSearchPage(){
  // setPath("search")
  nav(`/search`,{state:{userToken:userToken,islogin:isLogin}})
}
function goToOwnerPlannerPage(){
    // setPath("WeddingPlanners")

  nav(`/WeddingPlanners`,{state:{userToken:userToken,islogin:isLogin}})

}
console.log(isLoggedOut)
useEffect(() => {
  if (isLoggedOut) {
    alert("You Logged out");
    nav(`/`,{state:{userToken:userToken,islogin:isLogin}})
    
  }
  
}, [isLoggedOut]);
function goToProfile(){
  nav(`/${userToken.role}/${userToken.id}`,{state:{data:userToken,isLogin:isLogin}})
}
console.log(isLogin)
  return (
    <>
      <IconContext.Provider value={{}}>
        <div className="navbar">
          <div className="left">
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
              <div className="logo"onClick={goToHome} >
                <img className="avatar" src={image2} alt="" />
              </div>
            </div>
            {isLogin ?(
              <div onClick={goToProfile}  className="profile-photo">
              <img src={user} alt="user pic" />
            </div>

            ):(
              <div></div>

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
              <img src={image2} onClick={goToHome} className="avatar" alt="logo"></img>
            </li>
            {IsAdmin&&(
              <li key="Admin" className="nav-text" >
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
             <li  className="nav-text" onClick={()=>{setPath("home")}} >
              <button className="aAll transparentBorderN" onClick={()=>{setPath("home");goToHome()}}
                            style={{backgroundColor:path==="home"?"red":"transparent"}}
>
<FaHome />
                <span className="svgColor">Home</span>
              </button>
            </li>



            <li  className="nav-text" onClick={()=>{setPath("greatepackages")}} >
              <button className="aAll transparentBorderN" onClick={()=>{setPath("home");goToPackages()}}
                            style={{backgroundColor:path==="greatepackages"?"red":"transparent"}}
>
              <AiIcons.AiOutlineLogout />
                <span className="svgColor">Great Packages</span>
              </button>
            </li>



            <li  className="nav-text" onClick={()=>{setPath("WeddingPlanners")}} >
              <button className="aAll transparentBorderN" onClick={()=>{setPath("home");goToOwnerPlannerPage()}}
                            style={{backgroundColor:path==="WeddingPlanners"?"red":"transparent"}}
>
              <AiIcons.AiOutlineLogout />
                <span className="svgColor">Owners & Planners</span>
              </button>
            </li>
            <li  className="nav-text"

             >
              <button className="aAll transparentBorderN" onClick={()=>{setPath("home");goToSearchPage()}}
              style={{backgroundColor:path==="search"?"red":"transparent"}}
              
              >
              <AiIcons.AiOutlineLogout />
                <span className="svgColor">Search For Halls</span>
              </button>
            </li>
            {isLogin?(
               <li  className="nav-text" >
               <button className="aAll transparentBorderN"  onClick={handleLogout}>
               <AiIcons.AiOutlineLogout />
                 <span className="svgColor">Logout</span>
               </button>
             </li>
            ):(<></>)}
           
            
            
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
