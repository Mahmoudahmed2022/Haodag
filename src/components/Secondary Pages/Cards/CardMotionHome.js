import "../../../Css/CardMotionHome.css"
const CardMotionHome = ({image,content,name})=>{
    return(
        <>
        <div className="cardMotion">
                <div className="imageMotion">
                  <img href="#" src={image} />
                </div>
                <div className="contentMotion">
                  <h3>{name}</h3>
                  <p>{content}</p>
                </div>
              </div></>
    )
}
export default CardMotionHome;