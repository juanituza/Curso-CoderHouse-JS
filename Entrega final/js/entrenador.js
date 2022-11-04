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
    return this.idPersona;
  }
  get nombre() {
    return this.nombre;
  }
  set nombre(nombre) {
    return (this._nombre = nombre);
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    return (this._apellido = apellido);
  }

  // metodo toString para retornar datos de la clase.
  toString() {
    return `id persona: ${this._idPersona}, Nombre: ${this._nombre}, Apellido: ${this._apellido}`;
  }
}

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

// ------------------------->> CLASE SOCIO <<---------------------

//declaro clase socio
class Socio extends Persona {
  //declaro el contador para el id socio
  static contadorSocio = 0;

  // funcion constructor
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

  // metodo toString para retornar datos de la clase.
  toString() {
    return `${super.toString()}, Número de socio:${
      this._idSocio
    }, Cuota social:$${this._cuota}`;
  }
}

// ------------------------->> CLASE "CLASE" <<---------------------
//declaro clase actividad
class Actividad {
  //declaro el contador para el id actividad
  static contadorActividad = 0;

  //MAXIMO de alumnos en una actividad
  static get MAX_ALUMNOS() {
    return 3;
  }
  //MAXIMO de profesores en una actividad
  static get MAX_PROFESORES() {
    return 1;
  }

  //conmstructor de la actividad
  constructor(nombre) {
    this._idActividad = ++Actividad.contadorActividad;
    this._nombre = nombre;
    this._entrenadores = [];
    this._alumnos = [];
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

  // metodo para agregar un alumno a la actividad
  agregarAlumno(alumno) {
    if (this._alumnos.length < Actividad.MAX_ALUMNOS) {
      this._alumnos.push(alumno);
    } else {
      console.log("No se pueden agregar mas clientes");
    }
  }
  // metodo para agregar un profesor a la actividad
  agregarProfesor(profesor) {
    if (this._entrenadores.length < Actividad.MAX_PROFESORES) {
      this._entrenadores.push(profesor);
    } else {
      console.log("La actividad ya tiene un profesor");
    }
  }

  // metodo para mostrar alumnos y profesor de la Actividad
  mostrarActividad() {
    let alumnosActividad = "";
    for (let alumno of this._alumnos) {
      alumnosActividad += "\n{" + alumno.toString() + " }";
    }

    let profesoresActividad = " ";
    for (let profesor of this._entrenadores) {
      profesoresActividad += "\n{" + profesor.toString() + " }";
    }
    console.log(
      `Clase: ${this.idActividad} \nAlumnos: ${alumnosActividad} \nProfesor: ${profesoresActividad}`
    );
  }
}

//delcaracion de los profesores disponibles para las clases
const entrenadores = [];
entrenadores.push(new Profesor("Gabriela", "Fernandez", 500));
entrenadores.push(new Profesor("Luciana", "Ghio", 600));

// console.log(entrenadores);

//delcaracion de los alumnos disponibles para las clases
const alumno = [];
alumno.push(new Socio("Juan", "Mc Kenna", 800));
alumno.push(new Socio("Pedro", "Florentin", 1200));
// console.log(alumno.toString());

//delcaracion de las "clase"
pilates = new Actividad();
/* pilates.agregarProfesor(entrenadores[0]); */
pilates.agregarProfesor(entrenadores[1]);
pilates.agregarAlumno(alumno[0]);
pilates.agregarAlumno(alumno[1]);
//pilates.mostrarActividad(alumno);
pilates.mostrarActividad();
