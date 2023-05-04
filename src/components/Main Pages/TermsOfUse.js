import { useState } from "react";
import "../../Css/TermsOfUse.css";
import Advertisement from "../Secondary Pages/Term Of Use/Advertisement";
import Developers from "../Secondary Pages/Term Of Use/Developers";
import Privacy from "../Secondary Pages/Term Of Use/Privacy";
import SocialMedia from "../Secondary Pages/Term Of Use/SocialMedia";
import TermofUse from "../Secondary Pages/Term Of Use/TermofUse";
function TermsOfUse() {
  let element;
  const term = document.getElementById("term");
  const privacy = document.getElementById("privacy");
  const socialMedia = document.getElementById("socialMedia");
  const advertisement = document.getElementById("advertisement");
  const developers = document.getElementById("developers");

  const cls = "terms-btn";
  const cls_act = "terms-btn-active";
  const [button_Type, setButton_Type] = useState("TermsOfUse");
  const chang_btn = (value) => {
    if (value === "term") {
      term.className = cls_act;
      privacy.className = cls;
      socialMedia.className = cls;
      advertisement.className = cls;
      developers.className = cls;
    }
    if (value === "privacy") {
      term.className = cls;
      privacy.className = cls_act;
      socialMedia.className = cls;
      advertisement.className = cls;
      developers.className = cls;
    }
    if (value === "socialMedia") {
      term.className = cls;
      privacy.className = cls;
      socialMedia.className = cls_act;
      advertisement.className = cls;
      developers.className = cls;
    }
    if (value === "advertisement") {
      term.className = cls;
      privacy.className = cls;
      socialMedia.className = cls;
      advertisement.className = cls_act;
      developers.className = cls;
    }
    if (value === "developers") {
      term.className = cls;
      privacy.className = cls;
      socialMedia.className = cls;
      advertisement.className = cls;
      developers.className = cls_act;
    }
  };
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
            className={cls_act}
            value="term"
            id="term"
            onClick={(term) => {
              setButton_Type("TermsOfUse");
              chang_btn(term.target.value);
            }}
          >
            Terms of use
          </button>

          <button
            className={cls}
            value="privacy"
            id="privacy"
            onClick={(privacy) => {
              setButton_Type("Privacy");
              chang_btn(privacy.target.value);
            }}
          >
            Privacy
          </button>

          <button
            className={cls}
            value="advertisement"
            id="advertisement"
            onClick={(advertisement) => {
              setButton_Type("Advertisement");
              chang_btn(advertisement.target.value);
            }}
          >
            Advertisement
          </button>

          <button
            className={cls}
            value="socialMedia"
            id="socialMedia"
            onClick={(socialMedia) => {
              setButton_Type("SocialMedia");
              chang_btn(socialMedia.target.value);
            }}
          >
            Social media
          </button>

          <button
            className={cls}
            value="developers"
            id="developers"
            onClick={(developers) => {
              setButton_Type("Developers");
              chang_btn(developers.target.value);
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
