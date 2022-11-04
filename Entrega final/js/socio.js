class Socio extends Persona {
  static contadorSocio = 0;

  constructor(nombre, apellido, cuota) {
    super(nombre, apellido);
    this._idSocio = ++Socio.contadorSocio;
    this._cuota = cuota;
  }
  get idSocio() {
    return this.idSocio;
  }
  get cuota() {
    return this._cuota;
  }
  set cuota(cuota) {
    this._cuota = cuota;
  }

  toString() {
    return `${super.toString()} ${_idSocio} ${_cuota}`;
  }
}

const alumno = [];

alumno.push(new Socio("Juan", "Mc Kenna", 800));
alumno.push(new Socio("Pedro", "Florentin", 1200));
console.log(alumno);
