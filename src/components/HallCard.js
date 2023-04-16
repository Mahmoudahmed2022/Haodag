import React from "react";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { MdFastfood } from "react-icons/md";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdDirectionsCarFilled } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const HallCard = (props)=>{
    const cardData = props.cardData;
    const location = useLocation();
    const IsHallOwner = location.pathname.includes("owner");
    console.log(IsHallOwner)
    return(
                <div className="containerHalls" key={cardData.id}>
                  <div className="RigthAndLeft">
                    <div className="imageForHall">
                      <img
                        className="imginside"
                        src={cardData.image}
                        alt={cardData.title}
                      ></img>
                    </div>
                    <div className="rightContentInfo">
                      <div>
                        <h2>Hall Name</h2>
                        <div className="iconsForDiscription">
                          <MdFastfood />
                          <MdEmojiFoodBeverage />
                          <MdDirectionsCarFilled />
                          <FaParking />
                        </div>
                      </div>
        
                      <div className="priceAndLocation">
                        <div className="priceHall">
                          <p>{cardData.price}$</p>
                        </div>
                        <div>
                          <p>
                            {" "}
                            <MdLocationPin /> {cardData.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lastButtonForDetails">
                    <Link className="lastButtonForDetails-button" to="/hallDetails">
                      Details
                    </Link>
                    {IsHallOwner && (
                        <Link className="lastButtonForDetails-button" to="/hallForm">Edit Hall</Link>
                    )}
                  </div>
                </div>
            );
          };
    

export default HallCard;