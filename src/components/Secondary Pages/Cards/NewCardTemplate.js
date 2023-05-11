import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../../../Css/NewCardTemplate.css";
import HallProfile from "../Hall/HallProfile";
import { useState } from "react";
// import image from "../components/images/tabels.jpg";
const NewCardTemplate = (props)=>{
    const cardData = props.cardData
    const userToken = props.userToken;
    const [showHallDetails,setShowHallDetails] = useState(false);
    console.log('fromNewCardp',props.userToken)
    const isOwner = props.userToken.role==='owner';
    function handleHallDetailsClick() {
      setShowHallDetails(true);
    }

    function deleteHall(){
        fetch(`https://fakestoreapi.com/products/${cardData.id}`,{
          method:"DELETE",
        }).then(res=>{
          if(res.ok){
            window.location.reload()
          }else alert('Error Happened Please Try Again Later')
        })
      }
      console.log(cardData.photos[0]);
    return(
        <div className="CardContainer " >
            <div className="ContImgCard">
                <img src={cardData?.photos[0]} alt=""></img>
            </div>
            <div className="AllRightData">
                <div className="ContH3AndTrash">
                <h3>{cardData.name} </h3>
                {isOwner&&(<FaTrash onClick={deleteHall}  />)}
                </div>
                
                <p>{cardData.title}</p>
                <p>Price: {cardData.price} </p>
                <div>
                <Link to={`/hallDetails/:${cardData.id}`} onClick={handleHallDetailsClick} >Details
                {showHallDetails &&<HallProfile showHallDetails={showHallDetails} cardData={cardData}/>}
                </Link>
                {isOwner && <Link to={`/hallDetails/${cardData.id}`}>Edit</Link>}
                </div>
                
                
            </div>
            
        </div>
    )
}
export default NewCardTemplate;