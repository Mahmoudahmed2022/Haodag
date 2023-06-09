import React, { useEffect, useState } from "react";
import "../../Css/GreatePackages.css";
import PackageCard from "../Secondary Pages/Cards/PackageCard";
import NavbarWithSideBar from "./NavbarWithSideBar";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./Redux";
const GreatePackages = () => {
  const personData = useContext(MyContext);
  console.log(personData);
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
    <>
    <NavbarWithSideBar/>
    <div className="containerPackages">
    <h1 className="h1Great">We Recommend For You a Greate Packages </h1>

      <div className="ContDataaa">
        {cardData.map((data, index) => (
          <PackageCard key={index} cardData={data} />
        ))}{" "}
      </div>
    </div>
    </>
  );
};

export default GreatePackages;
