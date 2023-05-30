import React, { useEffect, useState } from "react";
import "../../Css/GreatePackages.css";
import PackageCard from "../Secondary Pages/Cards/PackageCard";
import NavbarWithSideBar from "./NavbarWithSideBar";
import { useLocation } from "react-router-dom";
const GreatePackages = () => {
  const [cardData, setCardData] = useState([]);
  const location = useLocation();
  const userToken = location?.state?.data;
  const userData = location?.state?.userData;
  const isLogin = location?.state?.isLogin;
console.log(userToken)
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
    <NavbarWithSideBar userData={userData}
        userToken={userToken}
        isLogin={isLogin}/>
    <div className="containerPackages">
      <div className="ContDataaa">
        <h1>We Recommend For You a Greate Packages </h1>
        {cardData.map((data, index) => (
          <PackageCard key={index} cardData={data} />
        ))}{" "}
      </div>
    </div>
    </>
  );
};

export default GreatePackages;
