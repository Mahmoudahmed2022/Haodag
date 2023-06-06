import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Favorite from "./Favorite";

const Users = ({ userData, userToken, isLogin }) => {
  const [visible, setVisible] = useState(5);
  const [ownersHallsCard, setownersHallsCard] = useState([]);

  const loadMore = () => {
    setVisible(visible + 5);
  };

  const getownersHallsCard = () => {
    fetch(`http://127.0.0.1:8000/user/auth/getUserFavsHalls`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken.token}`,
        "auth-token": `${userToken.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setownersHallsCard(data.halls);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getownersHallsCard();
  }, []);
  return (
    <>
      <div className="halls">
        <h1 className="fav-head">Favourites Halls</h1>
        <div className="home-allhalls-container">
          {ownersHallsCard?.length > 0 ? (
            <>
              {ownersHallsCard?.slice(0, visible).map((data, index) => (
                <Favorite
                  userToken={userToken}
                  key={index}
                  cardData={data}
                  isLogin={isLogin}
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
export default Users;
