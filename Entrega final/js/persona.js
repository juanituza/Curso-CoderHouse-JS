// ------------------------->> CLASE PERSONA <<---------------------
class Persona {
  //declaro el contador para el id persona
  static contadorPersona = 0;

  // funcion constructor
  constructor(nombre, apellido) {
    this._idPersona = ++Persona.contadorPersona;
    this._nombre = nombre;
    this._apellido = apellido;
  }
  // get y set clase persona
  get idPersona() {
    return this._idPersona;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
     this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
   this._apellido = apellido;
  }
  
}
