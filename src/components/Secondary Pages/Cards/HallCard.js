import React, { useState, useEffect } from "react";
import { FaParking, FaTrash } from "react-icons/fa";
import {
  MdDirectionsCarFilled,
  MdEmojiFoodBeverage,
  MdFastfood,
  MdLocationPin,
} from "react-icons/md";
import { Link, useParams } from "react-router-dom";
const HallCard = (props) => {
  const owner = props.cardData;
  const token = owner.token;
  const ownerId = owner.id;
  const [cardData, setCardData] = useState({});
  const [showDeleteCourseModal, setShowDeleteCourseModal] = useState(false);
  const allCardData = (ownerId) => {
    fetch(`http://127.0.0.1:8000/owner/auth/getAllOwnerHalls/${ownerId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "auth-token": `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCardData(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // function deleteCourse() {
  //   fetch(`https://fakestoreapi.com/products/${cardData.id}`, {
  //     method: "DELETE",
  //   }).then((res) => {
  //     if (res.ok) {
  //       window.location.reload();
  //     } else alert("Error Happened Please Try Again Later");
  //   });
  // }
  const cardshow = () => {};
  useEffect(() => {
    allCardData(ownerId);
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(cardData);
  }, []);
  return (
    <>
      {cardData.map((card) => {
        <div className="containerHalls" key={card.id}>
          <div className="RigthAndLeft">
            <div className="imageForHall">
              <img className="imginside" src={card.photo} alt={card.name}></img>
            </div>
            <div className="rightContentInfo">
              <div className="contTrashAndName">
                <div className="W90">
                  <h2>{card.name}</h2>
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
                  <p>{card.price}$</p>
                </div>
                <div>
                  <p>
                    {" "}
                    <MdLocationPin /> {card.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lastButtonForDetails">
            <Link
              className="lastButtonForDetails-button"
              to={`/hallDetails/${card.id}`}
            >
              Details
            </Link>
            {
              <Link className="lastButtonForDetails-button" to="/hallForm">
                Edit Hall
              </Link>
            }
          </div>
        </div>;
      })}
    </>
  );
};

export default HallCard;
