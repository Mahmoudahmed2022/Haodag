import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../Css/Plandetails.css";
import PlanSlider from "../Plan/PlanSlider";
function PlanDetails(props) {
  const [product, setProduct] = useState({});
  const params = useParams();
  const api_url = "https://fakestoreapi.com/products";

  const Plan = () => {
    axios.get(`${api_url}/${params.plannerId}`).then((data) => {
      setProduct(data.data);
    });
  };
  useEffect(() => {
    Plan();
    console.log(product);
  }, []);

  return (
    <>
      <div className="Plan-big-cont">
        <div className="plantit">
          <h1 className="PlanName">{product.title} </h1>
        </div>
        <div className="plan-slider">
          <PlanSlider parm={params} />
        </div>
        <div>
          <div className="top-shape"></div>
          <div className="plan-description">
            <h1>Description</h1>
            <p>{product.description}</p>
          </div>
        </div>
        <div>
          <div className="top-shape"></div>
          <div className="plan-description">
            <h1>Services</h1>
            <ul>
              <li>
                <p>{product.category}</p>
              </li>
              <li>
                <p>{product.category}</p>
              </li>
              <li>
                <p>{product.category}</p>
              </li>
              <li>
                <p>{product.category}</p>
              </li>
              <li>
                <p>{product.category}</p>
              </li>
              <li>
                <p>{product.category}</p>
              </li>
              <li>
                <p>{product.category}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlanDetails;
