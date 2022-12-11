// ------------------------->> CLASE SOCIO <<---------------------

//declaro clase socio
class Socio extends Persona {
  //declaro el contador para el id socio
  static contadorSocio = 0;

  // funcion constructor
  constructor(nombre, apellido, actividad) {
    super(nombre, apellido);
    this._idSocio = ++Socio.contadorSocio;
    this._actividad = actividad;
  }
  get idSocio() {
    return this.idSocio;
  }
  get actividad() {
    return this._actividad;
  }
  set actividad(actividad) {
    this._actividad=actividad;
  }
  
  // // metodo toString para retornar datos de la clase.
  // toString() {
  //   return `${super.toString()}, Número de socio:${
  //     this._idSocio
  //   }, Cuota social:$${this._cuota}`;
  // }
}
