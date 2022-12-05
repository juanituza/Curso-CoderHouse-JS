// ------------------------->> CLASE PROFESOR <<---------------------
//declaro clase profesor
class Profesor extends Persona {
  //declaro el contador para el id profesor
  static contadorProfesores = 0;

  // funcion constructor
  constructor(nombre, apellido, sueldo) {
    super(nombre, apellido);
    this._idProfesor = ++Profesor.contadorProfesores;
    this._sueldo = parseFloat(sueldo);
  }

  // get y set clase profesor
  get idProfesor() {
    return this.idProfesor;
  }
  get sueldo() {
    return this._sueldo;
  }
  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  // metodo toString para retornar datos de la clase.
  toString() {
    return `${super.toString()}, ID Profesor: ${this._idProfesor}, Sueldo: $${
      this._sueldo
    }`;
  }
}


