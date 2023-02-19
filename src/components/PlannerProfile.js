import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../Css/PlannerProfile.css";
function WeddingPlanner(props) {
  const planner_id = props;
  console.log(planner_id);
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
        <p className="planner-title">{planner.title}</p>
      </div>
    </>
  );
}

export default WeddingPlanner;
