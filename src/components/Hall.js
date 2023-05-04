import React from "react";
import { useEffect, useState } from "react";
import user2 from "./images/user2.png";
import { useParams } from "react-router-dom";
import "../Css/Hall.css";
import axios from "axios";
import Footer from "./Secondary Pages/Footer";
function Hall() {
  const parms = useParams();
  const [hall, setHall] = useState({});
  const api_url = "https://fakestoreapi.com/products";
  useEffect(() => {
    axios.get(`${api_url}/${parms.hallId}`).then((data) => {
      setHall(data.data);
    });
  }, []);
  return (
    <>
      <div className="hall-big-cont" key={hall.id}>
        <div className="hall-cont" key={hall.id}>
          <div className="img-div">
            <img src={hall.image} className="hall-img" alt={hall.title} />
          </div>
          <div className="hall-body">
            <p className="hall-title">{hall.title}</p>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Hall;
