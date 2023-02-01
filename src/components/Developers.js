import "../Css/Developers.css";
import user from "./images/user.png";
import mahmoud from "./images/mahmoud (2).jpg";
import kariem from "./images/kariem.jpeg";
import mohmed from "./images/mohmed.jpg";
import omar from "./images/omar.jpg";
import mostfa from "./images/mostafa.jpg";
function Developers() {
  return (
    <>
      <div className="big-developers-text-container">
        <div className="header-developers-text">
          <h2>Developers</h2>
        </div>
        <div className="body-developers-text">
          <div className="prof">
            <div className="dev-photo">
              <img className="dev-pic" src={mahmoud} alt="mahmoud pic" />
            </div>
            <h6>Mahmoud Ahmed</h6>
          </div>
          <div className="prof">
            <div className="dev-photo">
              <img className="dev-pic" src={kariem} alt="kariem pic" />
            </div>
            <h6>Kariem Atef</h6>
          </div>
          <div className="prof">
            <div className="dev-photo">
              <img className="dev-pic" src={mohmed} alt="mohmed pic" />
            </div>
            <h6>Mohmed Essam</h6>
          </div>
          <div className="prof">
            <div className="dev-photo">
              <img className="dev-pic" src={omar} alt="omar pic" />
            </div>
            <h6>Omer Salama</h6>
          </div>
          <div className="prof">
            <div className="dev-photo">
              <img className="dev-pic" src={mostfa} alt="mostfa pic" />
            </div>
            <h6>Mostfa Shwehy</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Developers;
