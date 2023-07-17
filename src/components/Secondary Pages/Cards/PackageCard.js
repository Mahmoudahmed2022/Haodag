import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../../Css/NewCardTemplate.css";
import HallProfile from "../Hall/HallProfile";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import { MyContext } from "../../Main Pages/Redux";
const PackageCard = ({cardData}) => {
  const personData = useContext(MyContext);
  // console.log("cardDa",cardData)
  // console.log("check",personData==="admin")
  const navigate = useNavigate();
  const [showHallDetails, setShowHallDetails] = useState(false);
  const [hall, setHall] = useState();
const nav=useNavigate();
  const allCardData = () => {
    fetch(`http://127.0.0.1:8000/api/auth/getHall/${cardData.hall_id}`)
      .then((response) => response.json())
      .then((data) => {
        setHall(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  function handleClick() {
    navigate(`/EditPackage/${hall.id}`, {
      state: { hall: cardData },
    });
  }

  function handleHallDetailsClick(hall) {
    // setShowHallDetails(true);
    nav(`/hallDetails/${cardData.hall_id}`);
  }

  function deletePackage() {
    Swal.fire({
      title: "Are you sure you want to delete this package?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://127.0.0.1:8000/admin/auth/destroyOffer/${cardData.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${personData.token}`,
            "auth-token": `${personData.token}`,
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            Swal.fire({
              title: "Package has been deleted",
              showCancelButton: false,
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
          window.location.reload();
      }
    });
  }
  
  // console.log(cardData, hall);

  useEffect(() => {
    allCardData();
  }, []);

  return (
    <div className="CardContainer ">
      <div className="ContImgCard">
        <img src={hall?.photos[0]} alt={cardData.hall_name}></img>
      </div>
      <div className="AllRightData">
        <div className="ContH3AndTrash">
          <h3>{cardData.hall_name} </h3>
          {/* {isOwner&&(<FaTrash onClick={deleteHall}  />)} */}
        </div>

        <p className="custom-scrollbar">{cardData.package_description}</p>
        <p>Price: {cardData.price} </p>
        <div className="package-btn">
          <button
          className="buttonMain details"
           
            onClick={()=>handleHallDetailsClick(hall)}
          >
            Details
            {/* {showHallDetails && (
              <HallProfile
                showHallDetails={showHallDetails}
                cardData={cardData}
              />
            )} */}
          </button>
          {personData.role==="admin" && (
            <button className="buttonMain edit" onClick={handleClick}>
              Edit 
            </button>
          )}
          {personData.role==="admin" && (
            <button className="buttonMain delete" onClick={deletePackage}>
              Delete 
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default PackageCard;
