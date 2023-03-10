import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlanDetails(props) {
 const [product, setProduct] = useState({});

 const params = useParams();
const api_url="https://fakestoreapi.com/products"
 useEffect(() => {
    fetch(`${api_url}/${params.plannerId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
      console.log(product);
  });
  return (
    <>
<h1>{product.title}</h1>
      
    </>
  );
}

export default PlanDetails;
