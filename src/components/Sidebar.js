import { FaCog } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { GoDashboard } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { BiPackage } from "react-icons/bi";

import { FaMale } from "react-icons/fa";
import "../Css/App.css";
import { Link } from "react-router-dom";
import "../Css/sidebar.css";
import image from "./images/logo1.png";
import { useState } from "react";
function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <div className="toggle-setting">
    <FaCog onClick={showSidebar} 
            className="fa-gear"/>
           </div>
           
         <div onClick={showSidebar} className={sidebar ? 'sidebar-box open' : 'sidebar-box '}>
         <div className="Allsidebar ">
           <div className="content1">
             <ul className="sidebar-top" onClick={showSidebar}>
               <div className="Alllogo">
                 <Link className="a1" to="/home">
                   <img src={image} alt="logo"></img>
                 </Link>
               </div>
               <li>
                 <div>
                   <GoDashboard />
                   <Link className="a1"  to="/dashboard">Dashboard</Link>
                 </div>
               </li>
               <li>
                 <div>
                   <FaHome />
                   <Link className="a1" to="/home">Home</Link>
                 </div>
               </li>
               <li>
                 <div>
                   <FaHandsHelping />
                   <Link className="a1" to="/suggested-halls">Suggested Halls</Link>
                 </div>
               </li>
               <li>
                 <div>
                   <FaMale />
                   <Link className="a1" to="/wedding-planners">Wedding Planners</Link>
                 </div>
               </li>
               <li>
                 <div>
                   <BiPackage />
                   <Link className="a1" to="/dashboard">Great Packages</Link>
                 </div>
               </li>
             </ul>
             <ul className="sidebar-bottom">
               <li className="setting">
                 <div className="calender">
                   <div className="message">
                     <FaCog />
 
                     <a href="#">Settings</a>
                   </div>
                 </div>
               </li>
 
               <li className="setting">
                 <div className="calender">
                   <div className="message">
                     <AiOutlineLogout />
 
                     <Link className="a1" to="/login">Log Out</Link>
                   </div>
                 </div>
               </li>
             </ul>
           </div>
         </div>
       </div>
      
     
    </>
  );
}
export default Sidebar;
