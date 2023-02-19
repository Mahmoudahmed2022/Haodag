import React from "react";
import { Link } from "react-router-dom";
import "../Css/HallProfile.css"
const InfoShow = (props) =>{
    const product = props.products
    return(
        <>
          <div className="allContInfo">
        <div className="card-content">
          <h2 className="section__title">Shows</h2>
          <ul className="uiForInfo">
            {product.map((element) => 
              <li className="liElement">
              <p className="pForData">{element.Title}</p>
            </li>

            )}
            
           
          </ul>
          <div className="bLM"><Link className="linkMoreD" to ="/">More Details</Link></div>

        </div>
        <div></div>
      </div>
        </>
    )


}

export default InfoShow;