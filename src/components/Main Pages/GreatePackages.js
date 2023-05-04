import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Css/GreatePackages.css";
import NewCardTemplate from "../Secondary Pages/Cards/NewCardTemplate";
const GreatePackages = () => {
  const [cardData, setCardData] = useState([]);

  const allCardData = () => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setCardData(data.data);
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
        <NewCardTemplate key={index} cardData={data} />
      ))}{" "}
    </div>
    </div>
  );
};

export default GreatePackages;
