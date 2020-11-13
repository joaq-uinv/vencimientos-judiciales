import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caratulas: "",
      fechaNotificacion: "",
      fuero: "",
    };
  }

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
    // console.log(this.state.caratulas); //!imprime lo tipeado en el input
    // console.log(this.state.fechaNotificacion); //!imprime la fecha elegida en el input
    // console.log(this.state.fuero); //!imprime el valor de la opción i.e civil-comercial o laboral

    //volver a dejar el input y el calendario en blanco
    this.setState({
      caratulas: "",
      fechaNotificacion: "",
      fuero: "",
    });
  };

  render() {
    const fueros = [
      {
        label: "Civil/Comercial",
        value: "civil-comercial",
        id: 1,
      },
      {
        label: "Laboral",
        value: "laboral",
        id: 2,
      },
    ];
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
          <select
            name="fuero"
            value={this.state.fuero}
            onChange={this.onChange}
            className="main-input"
            required
          >
            {fueros.map((fuero) => (
              <option value={fuero.value} key={fuero.id}>
                {fuero.label}
              </option>
            ))}
          </select>
          <button type="submit" className="submit-btn">
            <i className="fa fa-plus"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
