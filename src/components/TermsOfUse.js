import { useState } from "react";
import TermofUse from "./TermofUse";
import Privacy from "./Privacy";
import Advertisement from "./Advertisement";
import SocialMedia from "./SocialMedia";
import Developers from "./Developers";
import "../Css/TermsOfUse.css";
function TermsOfUse() {
  let element;
  const [button_Type, setButton_Type] = useState("TermsOfUse");
  const [button_state, setButton_Active] = useState("terms-btn");
  if (button_Type === "TermsOfUse") {
    element = <TermofUse />;
  }
  if (button_Type === "Privacy") {
    element = <Privacy />;
  }
  if (button_Type === "Advertisement") {
    element = <Advertisement />;
  }
  if (button_Type === "SocialMedia") {
    element = <SocialMedia />;
  }
  if (button_Type === "Developers") {
    element = <Developers />;
  }
  return (
    <>
      <div className="big-term-container">
        <div className="terms-div-btns">
          <button
            className={button_state}
            onClick={(e) => {
              setButton_Type("TermsOfUse");
              setButton_Active("terms-btn-active");
            }}
            on
          >
            Terms of use
          </button>

          <button
            className={button_state}
            onClick={() => {
              setButton_Type("Privacy");
              setButton_Active("terms-btn-active");
            }}
          >
            Privacy
          </button>

          <button
            className={button_state}
            onClick={() => {
              setButton_Type("Advertisement");
              setButton_Active("terms-btn-active");
            }}
          >
            Advertisement
          </button>

          <button
            className={button_state}
            onClick={() => {
              setButton_Type("SocialMedia");
              setButton_Active("terms-btn-active");
            }}
          >
            Social media
          </button>

          <button
            className={button_state}
            onClick={() => {
              setButton_Type("Developers");
              setButton_Active("terms-btn-active");
            }}
          >
            Developers
          </button>
        </div>
        <div className="comp-txt">{element}</div>
      </div>
    </>
  );
}

export default TermsOfUse;
