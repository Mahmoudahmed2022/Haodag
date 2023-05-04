import { useEffect, useState } from "react";
import { FaGooglePlus, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../Css/Advertisement.css";

function Advertisement() {
  const [whatsappUrl, setWhatsappUrl] = useState("");
  let phoneNumber = "0";
  let message = "!";
  const urlWhatSap = () => {
    phoneNumber = "201026249568"; // replace with the phone number you want to chat with
    message = "Hello!"; // replace with the message you want to send
    setWhatsappUrl(
      `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`

      //`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    );
  };
  useEffect(() => {
    urlWhatSap();
  }, []);
  return (
    <>
      <div className="big-Advertisement-text-container">
        <div className="header-Advertisement-text">
          <h2>Advertisement</h2>
        </div>
        <div className="body-Advertisement-text">
          <div className="sml-Advertisement-cont">
            <p className="adv-txt">contact with : </p>
            <div className="adv-log">
              <a
                href={whatsappUrl}
                className="aLink-Advertisement color-whatsapp"
              >
                <FaWhatsapp className="icon-Advertisement" />
              </a>
              <a className="a-tag" href={whatsappUrl} target="_blank">
                Haodag (Whatsap)
              </a>
            </div>
          </div>
          <div className="sml-Advertisement-cont">
            <p className="adv-txt">or email: </p>
            <div className="adv-log">
              <Link to="/" className="aLink-Advertisement color-google">
                <FaGooglePlus className="icon-Advertisement" />
              </Link>
              <a
                className="a-tag"
                href="mailto:oramahmoud6@gmail.com?subject=Contact for Advertisement&body=Hello"
                target="_blank"
              >
                Haodag@gmail.com
              </a>
              {/*window.open(
                "mailto:oramahmoud6@gmail.com?subject=Subject&body=Body%20goes%20here"
              )*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advertisement;
