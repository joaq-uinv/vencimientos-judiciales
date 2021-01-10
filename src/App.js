import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
//componentes
import Header from "./componentes/Header";
import Form from "./componentes/Form";
import MainContainer from "./componentes/MainContainer";
import Footer from "./componentes/Footer";
//db
import dbFirebase from "./firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actos: [],
    };
  }

  fuerosSelect = [
    {
      label: "Civil/Comercial",
      value: "civil-comercial",
    },
    {
      label: "Laboral",
      value: "laboral",
    },
  ];

  agregarActo = (caratula, fechaNotificacion, fuero) => {
    const nuevoActo = {
      caratula,
      fechaNotificacion,
      fuero,
      id: uuidv4(),
    };
    dbFirebase.push().set(nuevoActo);
  };

  borrarActo = (id) => {
    dbFirebase.child(id).remove();
  };

  componentDidMount = () => {
    //agregar acto a la db
    const actosAnteriores = this.state.actos;
    dbFirebase.on("child_added", (snapshot) => {
      actosAnteriores.push({
        id: snapshot.key,
        caratula: snapshot.val().caratula,
        fechaNotificacion: snapshot.val().fechaNotificacion,
        fuero: snapshot.val().fuero,
      });
      this.setState({ actos: actosAnteriores });
    });
    //eliminar acto de la db
    dbFirebase.on("child_removed", (snapshot) => {
      for (let i = 0; i < actosAnteriores.length; i++) {
        if (actosAnteriores[i].id === snapshot.key) {
          actosAnteriores.splice(i, 1);
        }
      }
      this.setState({ actos: actosAnteriores });
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Form
            actos={this.state.actos}
            fuerosSelect={this.fuerosSelect}
            agregarActo={this.agregarActo}
          />
          <MainContainer
            actos={this.state.actos}
            borrarActo={this.borrarActo}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
