// ------------------------->> CLASE ACTIVIDAD <<---------------------
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
  constructor(nombre,cuota) {
    this._idActividad = ++Actividad.contadorActividad;
    this._nombre = nombre;
    this._cuota = cuota;
    this._alumnos = [] ;
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
    return this.cuota;
  }
  set cuota(cuota) {
    this._cuota = cuota;
  }
 


  // get alumnos(){
  //   return this._alumnos;
  // }
  // set alumnos(alumnos) {
  //   this._alumnos = alumnos;
  // }
 

  // metodo para agregar un alumno a la actividad
  agregarAlumno(alumno) {
    if (this._alumnos.length < Actividad.MAX_ALUMNOS) {
    this._alumnos.push(alumno);

    } else {Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pueden agregar mas alumnos ",

    });
    }
  }
  mostrarAlumnos(){
    console.log(this._alumnos);
  }
  // metodo para agregar un profesor a la actividad
  // agregarProfesor(profesor) {
  //   if (this._entrenadores.length < Actividad.MAX_PROFESORES) {
  //     this._entrenadores.push(profesor);
  //   } else {
  //     console.log("La actividad ya tiene un profesor");
  //   }
  // }

  // metodo para mostrar alumnos y profesor de la Actividad
  mostrarActividad() {
    let alumnosActividad = " ";
    for (let alumno of this._alumnos) {
      alumnosActividad += "\n{" + alumno.toString() + " }";
    }

    let profesoresActividad = " ";
    for (let profesor of this._entrenadores) {
      profesoresActividad += "\n{" + profesor.toString() + " }";
    }
    return `Actividad: ${this.idActividad} \nAlumnos: ${alumnosActividad}`;
  }
}

