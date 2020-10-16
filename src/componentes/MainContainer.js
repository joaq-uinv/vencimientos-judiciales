import React from "react";
//componentes
import Acto from "./Acto";

const MainContainer = (props) => {
  return (
    <div className="container-ppal">
      <ul className="lista-actos">
        {props.actos.map((acto) => (
          <Acto
            key={acto.id}
            acto={acto}
            fechaNotificacion={acto.fechaNotificacion}
            fuero={acto.fuero}
            onClick={props.borrarActo}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainContainer;
