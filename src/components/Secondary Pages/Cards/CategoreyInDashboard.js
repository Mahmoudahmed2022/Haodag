import React, { useEffect, useState } from "react";
import { GoOrganization } from "react-icons/go";
import "../../../Css/AdminDashboard.css";

const CategoreyInDashboard = (props) => {
  const [clients, setClients] = useState([]);
  const keys = Object.keys(props);
  const type = keys[1];
  const getClients = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setClients(data));
  };
  useEffect(() => {
    getClients();
  }, []);
  return (
    <div className="divcategory">
      <div className="contUser">
        {/* <p>{type}</p> */}
        <p>{clients.length}</p>
      </div>
      <div className="contsvgCard">
        {" "}
        {/* <GoOrganization /> */}
      </div>
    </div>
  );
};

export default CategoreyInDashboard;
