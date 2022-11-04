class Persona {

    static contadorPersona=0;
    
  constructor(nombre, apellido) {
    this._idPersona = ++Persona.contadorPersona;
    this._nombre = nombre;
    this._apellido = apellido;
    
  }
  get idPersona() {
    return this.idPersona;
  }
  get nombre() {
    return this.nombre;
  }
  set nombre(nombre) {
    return this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    return this._apellido = apellido;
  }
  
  toString(){
    return`${this.idPersona} ${this.nombre} ${this.apellido} ${this.dni}`
  }
}

