import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HallCard from "./Cards/HallCard";
import { MyContext } from "../Main Pages/Redux";
import { useContext } from "react";
import NewCardTemplate from "./Cards/NewCardTemplate";

const Owners = ({ userData, isLogin }) => {
  const [visible, setVisible] = useState(5);
  const [ownersHallsCard, setownersHallsCard] = useState([]);
  const personData=useContext(MyContext);

  const loadMore = () => {
    setVisible(visible + 5);
  };

  const getownersHallsCard = () => {
    fetch(`http://127.0.0.1:8000/api/auth/getAllOwnerHalls/${userData.id}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Data received from server:", data);
        setownersHallsCard(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    if (userData?.role === "owner") getownersHallsCard();
  }, []);
  return (
    <>
              {(personData.role==="owner")||(userData.role==="owner")&& <h1 className="section-heading">Owner's Halls</h1>}

            <div className="halls">
              <h1>Halls</h1>

              <div className="home-allhalls-container">

                {ownersHallsCard.length > 0 ? (
                  <>
                    {ownersHallsCard.slice(0, visible).map((data, index) => (
                      <NewCardTemplate
                        key={index}
                        userData={userData}
                        cardData={data}
                      />
                    ))}
                    <div className="for-button">
                      {visible < ownersHallsCard.length && (
                        <button className="more" onClick={loadMore}>
                          Load 5 More
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          
    </>
  );
};
export default Owners;
