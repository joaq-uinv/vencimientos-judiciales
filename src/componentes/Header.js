import React from "react";
import Escudo from "./icon.svg";

export default function Header() {
  return (
    <div className="header">
      <p className="header-txt">Calculadora de vencimientos judiciales</p>
      <img src={Escudo} alt="" className="header-img" />
    </div>
  );
}
