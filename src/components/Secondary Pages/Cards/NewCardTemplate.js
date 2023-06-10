import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../Css/NewCardTemplate.css";
import { useContext } from "react";
import { MyContext } from "../../Main Pages/Redux";
import Swal from "sweetalert2";
const NewCardTemplate = ({ cardData }) => {
  const nav = useNavigate();
  const personData = useContext(MyContext);
  function goTohallDetails() {
    nav(`/hallDetails/${cardData.id}`, {
      state: { cardData: cardData },
    });
  }
  const deletePackage = (user) => {
    if (user) {
      Swal.fire({
        title: `Are You Sure To Delete Hall (${user.name}) `,
        showCancelButton: true,
      }).then((data) => {
        if (data.isConfirmed) {
          fetch(`http://127.0.0.1:8000/admin/auth/deleteHall/${user.id}`, {
            method: "POST",
            headers: {
              "auth-token": `${personData.token}`,
              Authorization: `Bearer${personData.token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.message);
              window.location.reload();
            });
        }
      });
    }
  };
  console.log(cardData);
  return (
    <div className="CardContainer animate">
      <div className="ContImgCard">
        <img src={cardData?.photos[0]} alt="no photo"></img>
      </div>
      <div className="ContDataInCard">
        <div className="ContTwoData">
          <div className="AllRightData">
            <p className="custom-scrollbar">
              Name:<span className="boldColor">{cardData.name}</span>{" "}
            </p>
            <p className="custom-scrollbar">
              Capacity: <span className="boldColor">{cardData.capacity}</span>
            </p>
            <p className="custom-scrollbar">
              Type: <span className="boldColor">{cardData.type}</span>
            </p>
            <p className="custom-scrollbar">
              Price: <span className="boldColor">{cardData.price}</span>{" "}
            </p>
            <p className="custom-scrollbar">
              Likes: <span className="boldColor">{cardData.likes_count}</span>{" "}
            </p>
          </div>
          <div className="AllRightData">
            <p className="custom-scrollbar">
              Country:<span className="boldColor">{cardData.country}</span>{" "}
            </p>
            <p className="custom-scrollbar">
              City: <span className="boldColor">{cardData.city}</span>
            </p>
            <p className="custom-scrollbar">
              Street: <span className="boldColor">{cardData.street}</span>{" "}
            </p>
            <p className="custom-scrollbar">
              Rooms: <span className="boldColor">{cardData.rooms}</span>
            </p>
            <p className="custom-scrollbar">
              Comments:{" "}
              <span className="boldColor">{cardData.comments_count}</span>{" "}
            </p>
          </div>
        </div>

        <div className="ContButtonGoToHall">
          <button className="details buttonMain" onClick={goTohallDetails}>
            Details
          </button>
          {/* {personData.role==="admin" && (
            <button className="buttonMain edit" onClick={handleClick}>
              Edit 
            </button>
          )} */}
          {personData.role === "admin" && (
            <button
              className="buttonMain delete"
              onClick={() => deletePackage(cardData)}
            >
              Delete
            </button>
          )}
          {/* {isOwner && <Link to={`/hallDetails/${cardData.id}`}>Edit</Link>} */}
        </div>
      </div>
    </div>
  );
};
export default NewCardTemplate;
