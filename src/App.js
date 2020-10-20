import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
//componentes
import Form from "./componentes/Form";
import MainContainer from "./componentes/MainContainer";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actos: [],
    };
  }

  agregarActo = (caratula, fechaNotificacion, fuero) => {
    const nuevoActo = {
      caratula,
      fechaNotificacion,
      fuero,
      id: uuidv4(),
    };
    this.setState({
      actos: [...this.state.actos, nuevoActo],
    });
  };

  borrarActo = (id) => {
    this.setState({
      actos: [...this.state.actos.filter((acto) => acto.id !== id)],
    });
  };

  //guardar actos
  guardarActo = () => {
    localStorage.setItem("actos", JSON.stringify(this.state.actos));
  };

  buscarActos = () => {
    if (localStorage.getItem("actos") === null) {
      localStorage.setItem("actos", JSON.stringify([]));
    } else {
      let actoGuardado = JSON.parse(localStorage.getItem("actos"));
      this.setState({ actos: actoGuardado });
    }
  };

  //renderizar actos guardados
  componentDidMount = () => {
    this.buscarActos();
  };

  componentDidUpdate = () => {
    this.guardarActo();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Form actos={this.state.actos} agregarActo={this.agregarActo} />
          <MainContainer
            actos={this.state.actos}
            borrarActo={this.borrarActo}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
