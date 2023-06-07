import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./Cards/ServiceCard";

const Services = ({ userData, userToken, isLogin }) => {
  const [visible, setVisible] = useState(5);
  const [supplierServiceCard, setSupplierServiceCard] = useState([]);

  const loadMore = () => {
    setVisible(visible + 5);
  };
  const getSupplierServiceCard = () => {
    fetch(
      `http://127.0.0.1:8000/supplier/auth/getAllSupplierServices/${userToken.id}`,
      {
        method: "GET",
        headers: {
          "auth-token": `${userToken.token}`,
          Authorization: `Bearer ${userToken.token}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from server:", data);
        setSupplierServiceCard(data.halls);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getSupplierServiceCard();
  }, []);
  return (
    <>
      <div className="halls">
        <h1 className="fav-head">Services</h1>
        <div className="home-allhalls-container">
          {supplierServiceCard?.length > 0 ? (
            <>
              {supplierServiceCard?.slice(0, visible).map((data, index) => (
                <ServiceCard
                  userToken={userToken}
                  key={index}
                  cardData={data}
                  isLogin={isLogin}
                />
              ))}
              <div className="for-button">
                {visible < supplierServiceCard.length && (
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
export default Services;
