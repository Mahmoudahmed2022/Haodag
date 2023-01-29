import NavbarWithSideBar from "./NavbarWithSideBar";
import React from "react";
import { useEffect, useState } from "react";
import user2 from "./images/user2.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";
import "../Css/Hall.css";
function Hall(props) {
  const hall_id = props;
  const [hall, setHall] = useState([]);
  const api_url = `https://fakestoreapi.com/products/${hall_id}`;
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setHall(data));
  }, []);
  return (
    <>
      <div className="WeddingPlanner-big-container" key={hall.id}>
        <img src={user2} className="planner-img" alt={hall.title} />
        <p className="planner-title">{hall.title.slice(0, 20)}</p>
      </div>
      <Footer />
    </>
  );
}

export default Hall;
