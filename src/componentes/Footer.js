import React from "react";
import PoderJudicial from "./icon.svg";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/joaqu%C3%ADn-villanueva-3b5857173/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        href="https://mev.scba.gov.ar/loguin.asp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={PoderJudicial}
          alt=""
          style={{
            width: "16px",
            height: "16px",
            margin: "0rem .5rem 0rem .5rem",
          }}
        />
      </a>
      <a
        href="https://portalpjn.pjn.gov.ar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={PoderJudicial}
          alt=""
          style={{
            width: "16px",
            height: "16px",
            margin: "0rem .5rem 0rem .5rem",
          }}
        />
      </a>
    </div>
  );
}
