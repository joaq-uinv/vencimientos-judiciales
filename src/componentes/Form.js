import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caratulas: "",
      fechaNotificacion: "",
      fuero: "",
      mostrarOpciones: false,
      fuerosSelect: this.props.fuerosSelect,
      fueroElegido: this.props.fuerosSelect && this.props.fuerosSelect[0],
    };
  }

  toggleFlecha = () => {
    this.setState((estadoAnterior) => ({
      mostrarOpciones: !estadoAnterior.mostrarOpciones,
    }));
  };

  elegirFuero = (fuero) =>
    this.setState({ mostrarOpciones: false, fueroElegido: fuero });

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    //pasar al estado de app el valor de lo que se tipee en el input y se elija en el calendario
    this.props.agregarActo(
      this.state.caratulas,
      this.state.fechaNotificacion,
      this.state.fuero
    );
    this.setState({
      caratulas: "",
      fechaNotificacion: "",
      fuero: "",
    });
  };

  render() {
    return (
      <div className="form-container">
        <form className="main-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="caratulas"
            placeholder="Carátula"
            value={this.state.caratulas}
            onChange={this.onChange}
            className="main-input"
            required
          />
          <label
            style={{ color: "#777" }}
            className="label-fecha"
            htmlFor="notificacion-acto"
          >
            Fecha de notificación
          </label>
          <input
            type="date"
            name="fechaNotificacion"
            value={this.state.fechaNotificacion}
            onChange={this.onChange}
            className="main-input"
            style={{ cursor: "pointer" }}
            required
          />
          <section className="contenedor-select">
            <span className="fuero-elegido">
              {this.state.fueroElegido.label}
            </span>
            <span className="flecha-select" onClick={this.toggleFlecha}>
              <span
                className={`${
                  this.state.mostrarOpciones
                    ? "flecha-select-arriba"
                    : "flecha-select-abajo"
                }`}
              />
            </span>
            <div
              className={
                this.state.mostrarOpciones
                  ? "opciones-visibles"
                  : "opciones-no-visibles"
              }
            >
              {this.props.fuerosSelect.map((fuero) => (
                <div
                  value={fuero.value}
                  key={fuero.value}
                  onClick={() => this.elegirFuero(fuero)}
                  className={this.state.fueroElegido === fuero ? "elegido" : ""}
                  name="fuero"
                >
                  {fuero.label}
                </div>
              ))}
            </div>
          </section>
          <button type="submit" className="submit-btn">
            <i className="fa fa-plus"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
