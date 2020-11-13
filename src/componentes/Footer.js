import React from "react";
//ings
import PJN from "./pjn.png";
import MEV from "./mev.png";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://mev.scba.gov.ar/loguin.asp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={MEV}
          alt=""
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </a>
      <a
        href="https://portalpjn.pjn.gov.ar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={PJN}
          alt=""
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </a>
    </div>
  );
}
