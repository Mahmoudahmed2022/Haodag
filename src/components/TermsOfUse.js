import { useState } from "react";
import TermofUse from "./TermofUse";
import Privacy from "./Privacy";
import Advertisement from "./Advertisement";
import SocialMedia from "./SocialMedia";
import Developers from "./Developers";
import "../Css/TermsOfUse.css";
function TermsOfUse() {
  const [button_Type, setButton_Type] = useState("TermsOfUse");
  let element;
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
            className="terms-btn"
            onClick={() => setButton_Type("TermsOfUse")}
          >
            Terms of use
          </button>

          <button
            className="terms-btn"
            onClick={() => setButton_Type("Privacy")}
          >
            Privacy
          </button>

          <button
            className="terms-btn"
            onClick={() => setButton_Type("Advertisement")}
          >
            Advertisement
          </button>

          <button
            className="terms-btn"
            onClick={() => setButton_Type("SocialMedia")}
          >
            Social media
          </button>

          <button
            className="terms-btn"
            onClick={() => setButton_Type("Developers")}
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
