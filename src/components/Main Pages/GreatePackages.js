import React, { useEffect, useState } from "react";
import "../../Css/GreatePackages.css";
import PackageCard from "../Secondary Pages/Cards/PackageCard";
const GreatePackages = () => {
  const [cardData, setCardData] = useState([]);

  const allCardData = () => {
    fetch("http://127.0.0.1:8000/api/auth/Offers")
      .then((response) => response.json())
      .then((data) => {
        setCardData(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(cardData);
  useEffect(() => {
    allCardData();
  }, []);

  return (
    <div className="containerPackages">
      <div className="ContDataaa">
        <h1>We Recommend For You a Greate Packages </h1>
        {cardData.map((data, index) => (
          <PackageCard key={index} cardData={data} />
        ))}{" "}
      </div>
    </div>
  );
};

export default GreatePackages;
