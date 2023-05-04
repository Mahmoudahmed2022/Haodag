import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../../../Css/NewCardTemplate.css";
// import image from "../components/images/tabels.jpg";
const NewCardTemplate = (props)=>{
    const cardData = props.cardData
    const location = useLocation();

    const isOwner = location.pathname.includes("owner");
    function deleteHall(){
        fetch(`https://fakestoreapi.com/products/${cardData.id}`,{
          method:"DELETE",
        }).then(res=>{
          if(res.ok){
            window.location.reload()
          }else alert('Error Happened Please Try Again Later')
        })
      }
    return(
        <div className="CardContainer " >
            <div className="ContImgCard">
                <img src={cardData.image} alt=""></img>
            </div>
            <div className="AllRightData">
                <div className="ContH3AndTrash">
                <h3>{cardData.title} </h3>
                {isOwner&&(<FaTrash onClick={deleteHall}  />)}
                </div>
                
                <p>{cardData.title}</p>
                <p>Price: {cardData.price} </p>
                <Link to={`/hallDetails/${cardData.id}`}>Details</Link>
            </div>
            
        </div>
    )
}
export default NewCardTemplate;