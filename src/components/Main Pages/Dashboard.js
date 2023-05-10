import React, { useEffect, useState } from "react";
import "../../Css/AdminDashboard.css";
import CategoreyInDashboard from "../Secondary Pages/Cards/CategoreyInDashboard";
import FetchAllData from "../Secondary Pages/FetchAllData";
const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [client, setClient] = useState([]);
  const [weddingPlanner, setWeddingPlanner] = useState([]);
  const [hallOwner, setHallOwner] = useState([]);
  const [hallsRequest, sethallsRequest] = useState([]);

  const getClients = () => {
    if (client.length === 0) {
      // check if hall owner data has already been fetched
      fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then((res) => res.json())
        .then((data) => setClient(data));
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
  const allHallsRequest = () => {
    if (hallsRequest.length === 0) {
      // check if halls Requests data has already been fetched
      fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((res) => res.json())
        .then((data) => sethallsRequest(data));
    }
  };

  useEffect(() => {
    getClients();
    getWeddingPlanner();
    getHallOwner();
    allHallsRequest();
  }, []);

  let content;
  if (selectedComponent === "client") {
    content = <FetchAllData person={client} />;
  } else if (selectedComponent === "hallOwner") {
    content = <FetchAllData person={hallOwner} />;
  } else if (selectedComponent === "weddingPlanner") {
    content = <FetchAllData person={weddingPlanner} />;
  } else if (selectedComponent === "hallsRequest") {
    content = <FetchAllData person={hallsRequest} />;
  }
  return (
    <div className="parentDashboard">
      <h1 className="adminHeader"> Admin Dashboard</h1>
      <div className="categories">
        <button onClick={() => setSelectedComponent("weddingPlanner")}>
          <CategoreyInDashboard
            className="carduser"
            weddingPlanner={weddingPlanner}
          />
        </button>
        <button onClick={() => setSelectedComponent("hallOwner")}>
          <CategoreyInDashboard className="carduser" hallOwner={hallOwner} />
        </button>
        <button onClick={() => setSelectedComponent("client")}>
          <CategoreyInDashboard className="carduser" client={client} />
        </button>
        <button onClick={() => setSelectedComponent("hallsRequest")}>
          <CategoreyInDashboard
            className="carduser"
            hallsRequest={hallsRequest}
          />
        </button>
      </div>
      <div className="usersmap">{content}</div>
    </div>
  );
};

export default Dashboard;
