import React from "react";
import Escudo from "./icon.svg";

export default function Header() {
  return (
    <div className="header">
      <h1 className="header-txt">Calculadora de vencimientos judiciales</h1>
      <img src={Escudo} alt="" className="header-img" />
    </div>
  );
}
