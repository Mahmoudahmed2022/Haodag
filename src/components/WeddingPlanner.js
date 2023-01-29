import React from "react";
import { useEffect, useState } from "react";
import user2 from "./images/user2.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function WeddingPlanner(props) {
  const planner_id = props;
  const [planner, setPlanner] = useState([]);
  const api_url = `https://fakestoreapi.com/products/${planner_id}`;
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setPlanner(data));
  }, []);
  return (
    <>
      <div className="WeddingPlanner-big-container" key={planner.id}>
        <img src={user2} className="planner-img" alt={planner.title} />
        <p className="planner-title">{planner.title.slice(0, 20)}</p>
      </div>
    </>
  );
}

export default WeddingPlanner;
