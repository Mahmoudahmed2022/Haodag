import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../Css/CardForDashboard.css";
import { FaTh } from "react-icons/fa";
import planners from "../../images/planners.png";
import supplier from "../../images/suppliers.png";
import clients from "../../images/users.png";
import hallRequests from "../../images/hallRequests.png";
import hallss from "../../images/halls.png";
import owners from "../../images/owners.png";

function CardInDashboard({number,name,addPackage,backColor}) {
    let content;
    
    if (name === "Halls") {
      content = <img  src={hallss} alt="halls"></img>;
    } else if (name === "Plans") {
      content = <img src={hallss} alt="plans"></img>;
    } else if (name === "Hall Owners") {
      content = <img src={owners} alt="owners"></img>;
    } else if (name === "Suppliers") {
      content = <img src={supplier} alt="suppliers"></img>;
    } else if (name === "Planners") {
      content = <img src={owners} alt="planners"></img>;
    } else if (name === "Clients") {
      content = <img src={clients} alt="clients"></img>;
    } else if (name === "add package") {
      content = <img src={hallss} alt="add package"></img>;
    }
    else if (name === "add admin") {
        content = <img src={planners} alt="add admin"></img>;
      }
     

 
  return (
    <>
      <div className="ContCardInfo"style={{ backgroundColor: backColor}}>
            <div className="InnerInfo">
              <div className="LeftInner">
                <p>{number}</p>
                <h3>{name}</h3>
              </div>
              <div className="RightInner">
                {content}
              </div>
            </div>
            <div className="ContForLink">
              {" "}
              {(name==="add package"||name==="add admin")?(
                              <button style={{ backgroundColor: "rgb(255 255 255 / 18%)"}} onClick={addPackage}>{name}</button>

              ):(
                              <a  style={{ backgroundColor: "rgb(255 255 255 / 18%)"}}>More info</a>

              )}
            </div>
          </div>
    </>
  );
}

export default CardInDashboard;
