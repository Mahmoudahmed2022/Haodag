import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "../../Main Pages/Redux";

function Favourites() {
  const personData=useContext(MyContext);

  const [favourites, setFavourites] = useState({});
  function getFavorites() {
    fetch("http://127.0.0.1:8000/user/auth/getFavourite", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${personData.token}`,
        "auth-token": `${personData.token}`,
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
  console.log(favourites);
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
