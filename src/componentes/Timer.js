import React, { Component } from "react";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diasRestantes: "",
      horasRestantes: "",
      minutosRestantes: "",
      segundosRestantes: "",
    };
  }

  componentDidMount = () => {
    this.tiempoRestante = setInterval(() => {
      let fechaElegida = new Date(this.props.fechaNotificacion);
      // console.log(fechaElegida); //?Dia Mes n° 2020 21:00:00 GMT-0300 (hora estándar de Argentina) --> formato iso

      let anioElegido = fechaElegida.getFullYear();
      let mesElegido = fechaElegida.getMonth();
      let diaElegido = fechaElegida.getDate();

      if (this.props.fuero === "laboral") {
        if (fechaElegida.getDay() !== 0) {
          //!0 porque fechaElegida está en formato iso y entonces 'usa' un día anterior al actual
          //console.log(fechaElegida.getDay());
          const deadlineLaboral = new Date(
            anioElegido,
            mesElegido,
            diaElegido + 7,
            12,
            0,
            0
          );
          // console.log(deadlineLaboral);

          const ahora = new Date().getTime();
          const t = deadlineLaboral - ahora;

          const unDia = 1000 * 60 * 60 * 24;
          const unaHora = 1000 * 60 * 60;
          const unMinuto = 1000 * 60;

          let diasRestantes = t / unDia;
          diasRestantes = Math.floor(diasRestantes);
          let horasRestantes = Math.floor((t % unDia) / unaHora);
          let minutosRestantes = Math.floor((t % unaHora) / unMinuto);
          let segundosRestantes = Math.floor((t % unMinuto) / 1000);

          this.setState({
            diasRestantes,
            horasRestantes,
            minutosRestantes,
            segundosRestantes,
          });
        } else if (fechaElegida.getDay() === 0) {
          // console.log(fechaElegida.getDay());
          const deadlineLaboral = new Date(
            anioElegido,
            mesElegido,
            diaElegido + 4,
            12,
            0,
            0
          );
          // console.log(deadlineLaboral);
          const ahora = new Date().getTime();
          const t = deadlineLaboral - ahora;

          const unDia = 1000 * 60 * 60 * 24;
          const unaHora = 1000 * 60 * 60;
          const unMinuto = 1000 * 60;

          let diasRestantes = t / unDia;
          diasRestantes = Math.floor(diasRestantes);
          let horasRestantes = Math.floor((t % unDia) / unaHora);
          let minutosRestantes = Math.floor((t % unaHora) / unMinuto);
          let segundosRestantes = Math.floor((t % unMinuto) / 1000);

          this.setState({
            diasRestantes,
            horasRestantes,
            minutosRestantes,
            segundosRestantes,
          });
        }
      } else if (fechaElegida.getDay() === 4) {
        const deadlineExcepcion = new Date(
          anioElegido,
          mesElegido,
          diaElegido + 11,
          12,
          0,
          0
        );
        const ahora = new Date().getTime();
        const t = deadlineExcepcion - ahora;
        const unDia = 1000 * 60 * 60 * 24;
        const unaHora = 1000 * 60 * 60;
        const unMinuto = 1000 * 60;

        let diasRestantes = t / unDia;
        diasRestantes = Math.floor(diasRestantes);
        let horasRestantes = Math.floor((t % unDia) / unaHora);
        let minutosRestantes = Math.floor((t % unaHora) / unMinuto);
        let segundosRestantes = Math.floor((t % unMinuto) / 1000);

        this.setState({
          diasRestantes,
          horasRestantes,
          minutosRestantes,
          segundosRestantes,
        });
      } else {
        //agregar 5 días y a las 12 del mediodía p/civil y comercial y 3 y a las 12 también del mediodia p/laboral //!sumar 8 en vez de 5, que serían los días hábiles, porque 5 días hábiles equivalen a 7 días de corrido y tengo que agregarle uno porque el objeto new Date() usa formato iso p/fechas que se usan como argumento suyo
        const deadline = new Date(
          anioElegido,
          mesElegido,
          diaElegido + 9,
          12,
          0,
          0
        );
        // console.log(deadline);
        const ahora = new Date().getTime();
        const t = deadline - ahora;
        const unDia = 1000 * 60 * 60 * 24;
        const unaHora = 1000 * 60 * 60;
        const unMinuto = 1000 * 60;

        let diasRestantes = t / unDia;
        diasRestantes = Math.floor(diasRestantes);
        let horasRestantes = Math.floor((t % unDia) / unaHora);
        let minutosRestantes = Math.floor((t % unaHora) / unMinuto);
        let segundosRestantes = Math.floor((t % unMinuto) / 1000);

        this.setState({
          diasRestantes,
          horasRestantes,
          minutosRestantes,
          segundosRestantes,
        });
      }
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.tiempoRestante);
  };

  render() {
    const {
      diasRestantes,
      horasRestantes,
      minutosRestantes,
      segundosRestantes,
    } = this.state;
    return (
      <div>
        {diasRestantes === 0 &&
        horasRestantes === 0 &&
        minutosRestantes === 0 &&
        segundosRestantes === 0 ? (
          <p>¡Venció el plazo!</p>
        ) : (
          <p>
            Vence en {diasRestantes} días, {horasRestantes} horas,{" "}
            {minutosRestantes} minutos y {segundosRestantes} segundos
          </p>
        )}
      </div>
    );
  }
}

export default Timer;
