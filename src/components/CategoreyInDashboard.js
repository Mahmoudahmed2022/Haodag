import React, { useEffect, useState } from "react";
import { GoOrganization } from "react-icons/go";
import "../Css/AdminDashboard.css";

const CategoreyInDashboard = () => {
  const [clients, setClients] = useState([]);

  //   const getClients = () => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json())
  //       .then((data) => setClients(data));
  //   };
  //   useEffect(() => {
  //     getClients();
  //   }, []);
  return (
    <div className="divcategory">
      <div className="contUser">
        <p>Clients</p>
        <p>450</p>
      </div>
      <div className="contsvgCard">
        {" "}
        <GoOrganization />
      </div>
    </div>
  );
};

export default CategoreyInDashboard;
