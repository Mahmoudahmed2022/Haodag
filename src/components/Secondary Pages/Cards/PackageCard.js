import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../../Css/NewCardTemplate.css";
import HallProfile from "../Hall/HallProfile";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import { MyContext } from "../../Main Pages/Redux";
const PackageCard = (props) => {
  const personData = useContext(MyContext);
  const navigate = useNavigate();
  const cardData = props.cardData;
  const [showHallDetails, setShowHallDetails] = useState(false);
  const [hall, setHall] = useState();

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
      state: { hall: hall },
    });
  }

  function handleHallDetailsClick() {
    setShowHallDetails(true);
  }

  function deletePackage() {
    fetch(`http://127.0.0.1:8000/admin/auth/destroyOffer/${hall.id}`, {
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
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  console.log(cardData, hall);

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

        <p>{cardData.package_description}</p>
        <p>Price: {cardData.price} </p>
        <div className="package-btn">
          <Link
            to={`/hallDetails/${cardData.hall_id}`}
            onClick={handleHallDetailsClick}
          >
            Details
            {showHallDetails && (
              <HallProfile
                showHallDetails={showHallDetails}
                cardData={cardData}
              />
            )}
          </Link>
          {personData && (
            <button className="Details-button" onClick={handleClick}>
              Edit Package
            </button>
          )}
          {personData && (
            <button className="Details-button" onClick={deletePackage}>
              Delete Package
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default PackageCard;
