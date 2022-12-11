// ------------------------->> CLASE ACTIVIDAD <<---------------------
//declaro clase actividad
class Actividad {
  //declaro el contador para el id actividad
  static contadorActividad = 0;

  //conmstructor de la actividad
  constructor(nombre,cuota,entrenadores) {
    this._idActividad = ++Actividad.contadorActividad;
    this._nombre = nombre;
    this._cuota = cuota;
    this._entrenadores= entrenadores;
  }

  //get y set de la clase
  get idActividad() {
    return this._idActividad;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get cuota() {
    return this._cuota;
  }
  set cuota(cuota) {
    this._cuota = cuota;
  }
  get entrenadores() {
    return this._entrenadores;
  }
  set entrenadores(entrenadores) {
    this._entrenadores = entrenadores;
  }
}

