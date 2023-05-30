import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HallCard from "./Cards/HallCard";

const Owners = ({ userData, userToken, isLogin }) => {
  const [visible, setVisible] = useState(5);
  const [ownersHallsCard, setownersHallsCard] = useState([]);

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
        console.log("Data received from server:", data);
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
      
            <div className="halls">
              <div className="home-allhalls-container">
                {ownersHallsCard.length > 0 ? (
                  <>
                    {ownersHallsCard.slice(0, visible).map((data, index) => (
                      <HallCard
                        key={index}
                        userToken={userToken}
                        userData={userData}
                        hall={data}
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
