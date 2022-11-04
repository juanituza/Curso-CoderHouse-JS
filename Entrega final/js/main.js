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
  constructor(nombre, cuota) {
    this._idActividad = ++Actividad.contadorActividad;
    this._nombre = nombre;
    this._cuota= cuota;
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
  get cuota() {
    return this._cuota;
  }
  set cuota(cuota) {
    this._cuota = cuota;
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
      `Actividad: ${this.idActividad} \nAlumnos: ${alumnosActividad} \nProfesor: ${profesoresActividad}`
    );
  }
}
let clase = prompt(
  "Ingrese actividad que desea consultar o realizar: PILATES, YOGA o DANZAS"
).toLocaleLowerCase();

const entrenadores = [];
entrenadores.push(new Profesor("Gabriela", "Fernandez", 500));
entrenadores.push(new Profesor("Luciana", "Ghio", 600));

const actividades=[];
actividades.push(new Actividad("pilates", 1000));
actividades.push(new Actividad("yoga", 950));
actividades.push(new Actividad("danzas", 1100));
actividades[0].agregarProfesor(entrenadores[0]);
actividades[1].agregarProfesor(entrenadores[1]);
actividades[2].agregarProfesor(entrenadores[1]);
actividades[0].mostrarActividad();

console.log(  );

const alumnos= [];


//Solicitar al usuario que elija clase

// Solicitar al usuario los datos para generar alumno
/* let nombreSocio = prompt("Ingrese su nombre").toLocaleLowerCase();
let apellidoSocio = prompt("Ingrese su apellido").toLocaleLowerCase();

// Solicitar al usuario la cantidad de clases que quiere realizar
let cantidad = Number(prompt("Ingrese cantidad de clases a tomar por semana")); */

//Condicional de acuerdo a lo elegido e imprimir en pantalla el resultado
    if (clase === "pilates") {
      // alumnos.push(nombreSocio,apellidoSocio,150);
//      actividades[0].agregarAlumno(alumnos[0]);
        
      
      alert(
        `la profesora es ${actividades[0]._entrenadores[0]._nombre} ${actividades[0]._entrenadores[0]._apellido}`
      );
    } else if (clase === "yoga") {
      alert(
        // `la profesora es ${profesor1.nombre} `
      );
    } else if (clase === "danzas") {
      alert(
        // `la profesora es ${profesor2.nombre} `
      );
    } else {
      alert("La clase no se brinda en el gimnasio");
    }
//Metodo con switch para calcular el precio que debería abonar
  // calcularPrecio(clase, cantidad) {
  //   switch (clase) {
  //     case "pilates":
  //       let precioFinalPilate = pilates.precioP * cantidad;
  //       return precioFinalPilate;
  //     case "yoga":
  //       let precioYoga = 150;
  //       let precioFinalYoga = precioYoga * cantidad;
  //       return precioFinalYoga;
  //     case "danzas":
  //       let precioDanza = 200;
  //       let precioFinalDanza = precioDanza * cantidad;
  //       return precioFinalDanza;

  //     default:
  //       "La clase no se da en el gimnasio";
  //       break;
  //   }
  // }


/* 
let profesor1 = new Profesor({
  nombre: "Gabriela",
});
let profesor2 = new Profesor({
  nombre: "Luciana",
});

//calculo de precio final que solicito el usuario
let pilates = new Clase({
  nombre: "pilates",
  precioP: 100,
  horario: 15,
});
pilates.precio();
profesor1.asignarClase();
profesor2.asignarClase(); */
