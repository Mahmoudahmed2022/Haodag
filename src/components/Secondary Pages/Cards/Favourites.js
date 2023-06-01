import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Favourites() {
  const location = useLocation();
  const userToken = location?.state?.data;
  const userData = location?.state?.userData;
  const isLogin = location?.state?.isLogin;
  const [favourites, setFavourites] = useState({});
  const [halls, setHalls] = useState({});
  function getFavorites() {
    fetch("http://127.0.0.1:8000/user/auth/getFavourite", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken.token}`,
        "auth-token": `${userToken.token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setFavourites(response.favourites);
      })
      .catch((err) => console.error(err));
  }
  // favourites.map((obj) => {
  //   fetch(`http://127.0.0.1:8000/api/auth/getHall/${obj.hall_id}`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setHalls((prevHalls) => [...prevHalls, response.data]);
  //     })
  //     .catch((err) => console.error(err));
  // });
  console.log(favourites, halls);
  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}
export default Favourites;
