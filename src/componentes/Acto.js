import React from "react";
import Timer from "./Timer";

export default function Acto(props) {
  return (
    <div className="actos-container">
      <li className="acto">{props.acto.caratula}</li>
      <div className="timer">
        <Timer
          caratula={props.acto.caratula}
          fechaNotificacion={props.acto.fechaNotificacion}
          fuero={props.acto.fuero}
        />
      </div>
      <button
        className="check-btn"
        onClick={props.onClick.bind(this, props.acto.id)}
      >
        <i className="fas fa-check"></i>
      </button>
    </div>
  );
}
