import React, { useState, useEffect } from "react";
import { FaParking, FaTrash } from "react-icons/fa";
import {
  MdDirectionsCarFilled,
  MdEmojiFoodBeverage,
  MdFastfood,
  MdLocationPin,
} from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import Hall from "../../Hall";
const HallCard = ({hall,userToken,key}) => {
  
  const navigate = useNavigate();
  console.log(userToken)
  console.log(hall)

 const isOwner=userToken.role==="owner";
  function handleClick() {
    navigate(`/editHall/${hall.id}`, { state: { data: userToken,hall:hall } });
  }
  const Id = useParams();
  // function deleteCourse() {
  //   fetch(`https://fakestoreapi.com/products/${cardData.id}`, {
  //     method: "DELETE",
  //   }).then((res) => {
  //     if (res.ok) {
  //       window.location.reload();
  //     } else alert("Error Happened Please Try Again Later");
  //   });
  // }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
    
        <div className="containerHalls" key={hall?.id}>
          <div className="RigthAndLeft">
            <div className="imageForHall">
              <img className="imginside" src={hall.photos[0]}  alt={hall.name}></img>
            </div>
            <div className="rightContentInfo">
              <div className="contTrashAndName">
                <div className="W90">
                  <h2>{hall.name}</h2>
                  <div className="iconsForDiscription">
                    <MdFastfood />
                    <MdEmojiFoodBeverage />
                    <MdDirectionsCarFilled />
                    <FaParking />
                  </div>
                </div>

                {<FaTrash />}
              </div>

              <div className="priceAndLocation">
                <div className="priceHall">
                  <p>{hall.price}$</p>
                </div>
                <div>
                  <p>
                    {" "}
                    <MdLocationPin /> {hall.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lastButtonForDetails">
            <Link
              className="lastButtonForDetails-button"
              to={`/hallDetails/${hall.id}`}
            >
              Details
            </Link>
            {isOwner&&
              <button className="lastButtonForDetails-button" onClick={handleClick}>
                Edit Hall
              </button>
            }
          </div>
        </div>;
    </>
  );
};

export default HallCard;
