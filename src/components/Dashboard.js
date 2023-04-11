import React, { useState, useEffect } from "react";
import FetchAllData from "./FetchAllData";
import CategoreyInDashboard from "./CategoreyInDashboard";
import "../Css/AdminDashboard.css";

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [client, setClient] = useState([]);
  const [weddingPlanner, setWeddingPlanner] = useState([]);
  const [hallOwner, setHallOwner] = useState([]);

  const api_url = "https://fakestoreapi.com/products";

  const getClients = () => {
    if (client.length === 0) {
      // check if client data has already been fetched
      fetch(api_url)
        .then((res) => res.json())
        .then((data) => setClient(data))
        .catch((error) => console.error(error));
    }
  };

  const getHallOwner = () => {
    if (hallOwner.length === 0) {
      // check if hall owner data has already been fetched
      fetch("https://fakestoreapi.com/products/category/electronics")
        .then((res) => res.json())
        .then((data) => setHallOwner(data));
    }
  };

  const getWeddingPlanner = () => {
    if (weddingPlanner.length === 0) {
      // check if wedding planner data has already been fetched
      fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res) => res.json())
        .then((data) => setWeddingPlanner(data));
    }
  };

  useEffect(() => {
    getClients();
    getWeddingPlanner();
    getHallOwner();
  }, []);

  let content;
  if (selectedComponent === "client") {
    content = <FetchAllData person={client} />;
  } else if (selectedComponent === "hallOwner") {
    content = <FetchAllData person={hallOwner} />;
  } else if (selectedComponent === "weddingPlanner") {
    content = <FetchAllData person={weddingPlanner} />;
  }

  return (
    <div className="parentDashboard">
      <h1 className="adminHeader"> Admin Dashboard</h1>
      <div className="categories">
        <button onClick={() => setSelectedComponent("client")}>
          <CategoreyInDashboard className="carduser" client={client} />
        </button>
        <button onClick={() => setSelectedComponent("weddingPlanner")}>
          <CategoreyInDashboard
            className="carduser"
            weddingPlanner={weddingPlanner}
          />
        </button>
        <button onClick={() => setSelectedComponent("hallOwner")}>
          <CategoreyInDashboard className="carduser" hallOwner={hallOwner} />
        </button>
      </div>
      <div className="usersmap">{content}</div>
    </div>
  );
};

export default Dashboard;
