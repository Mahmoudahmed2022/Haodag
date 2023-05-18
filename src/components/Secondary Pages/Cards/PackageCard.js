import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../../../Css/NewCardTemplate.css";
import HallProfile from "../Hall/HallProfile";
import { useEffect, useState } from "react";
const PackageCard = (props) => {
  const cardData = props.cardData;
  // const userToken = props.userToken;
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
  // console.log('fromNewCardp',props.userToken)
  // const isOwner = props.userToken.role==='owner';
  function handleHallDetailsClick() {
    setShowHallDetails(true);
  }

  // function deleteHall() {
  //   fetch(`https://fakestoreapi.com/products/${cardData.id}`, {
  //     method: "DELETE",
  //   }).then((res) => {
  //     if (res.ok) {
  //       window.location.reload();
  //     } else alert("Error Happened Please Try Again Later");
  //   });
  // }
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
        <div>
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
          {/* {isOwner && <Link to={`/hallDetails/${cardData.id}`}>Edit</Link>} */}
        </div>
      </div>
    </div>
  );
};
export default PackageCard;
