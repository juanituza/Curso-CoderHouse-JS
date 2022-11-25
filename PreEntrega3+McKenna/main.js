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
    return `${super.toString()}, ID Profesor: ${this._idProfesor}, Sueldo: $${this._sueldo
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
    // this._clase = acti;
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
    return `${super.toString()}, Número de socio:${this._idSocio
      }, Cuota social:$${this._cuota}`;
  }
}

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
  constructor(nombre, cuota) {
    this._idActividad = ++Actividad.contadorActividad;
    this._nombre = nombre;
    this._cuota = cuota;
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
      console.log("No se pueden agregar mas alumnos");
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

//Declaro una función para capitalizar cualquier texto, poner la 1er letra mayuscula y el resto minúscula
function capitalizarPrimeraLetra(str) {
  return ` ${str.charAt(0).toUpperCase()}${str.slice(1).toLocaleLowerCase()}`;
}

//genero los array de entranadores que tendra el gimnasio
const entrenadores = [];
entrenadores.push(new Profesor("Gabriela", "Fernandez", 500));
entrenadores.push(new Profesor("Luciana", "Ghio", 600));
entrenadores.push(new Profesor("Alma", "Perez", 600));

// genero las actividades que tendrá el gimnasio
const clases = [];
clases.push(new Actividad("Pilates", 1000));
clases.push(new Actividad("Yoga", 950));
clases.push(new Actividad("Danzas", 1100));

//Agrego los profesores a cada clase
clases[0].agregarProfesor(entrenadores[0]);
clases[1].agregarProfesor(entrenadores[1]);
clases[2].agregarProfesor(entrenadores[1]);






// filtro los nombres y apellidos de los profesores para mostrar en pantalla luego
let nombresProfesores = entrenadores.map((nombre) => nombre._nombre);
let apellidoProfesores = entrenadores.map((apellido) => apellido._apellido);
let profesorNombre = `${nombresProfesores} ${apellidoProfesores}`;

// filtro las cuotas de las clases  para mostrar en pantalla luego
let cuotasClases = clases.map((cuota) => cuota._cuota);

let nombreClases = clases.map((nombre) => nombre._nombre);
let pilate = clases.filter((item) => item._nombre === "pilates");
let yoga = clases.filter((item) => item._nombre === "yoga");
let danza = clases.filter((item) => item._nombre === "danzas");

let selectClases = document.getElementById("actividad");
const mostrarClases = (arreglo, dato) => {
  let elementos = "<option selected disabled> -->Seleccionar<-- </option>";

  for (let i = 0; i < arreglo.length; i++) {
    elementos +=
      '<option value="' + arreglo[i] + '">' + arreglo[i] + "</option>";
  }
  dato.innerHTML = elementos;
};

mostrarClases(nombreClases, selectClases);



// let actividadStorage = JSON.parse(localStorage.getItem("actividad"));
// let socioStorage = JSON.parse(localStorage.getItem("socio"));
// let cuotasStorage = JSON.parse(localStorage.getItem("cuota"));

const convertirObj = (capturarForm) => {

  let nombre = capturarForm.get("nombre");
  let nombreCapi = capitalizarPrimeraLetra(nombre);
  let apellido = capturarForm.get("apellido");
  let apellidoCapi = capitalizarPrimeraLetra(apellido);
  let clase = capturarForm.get("actividad");

  return { "nombre": nombreCapi, "apellido": apellidoCapi, "clase": clase };
};

//Creo una funcion para guardar los datos ingresados en el localStorage
const datosStorage = (obj) => {
  let datosArray = JSON.parse(localStorage.getItem("datos")) || [];
  //Ingreso los datos ingresador en el array para sumarlos y no se sobreescriba
  datosArray.push(obj);


  //Guardo el array en el localStorage
  return datosFinales = localStorage.setItem("datos", JSON.stringify(datosArray));
};






let boton = document.getElementById("añadir");
boton.addEventListener("click", ()=> {
  Swal.fire({
  icon: 'success',
  title: 'Guardado...',
  text: 'Cliente guardado exitosamente!',

})
})


let form = document.getElementById("formulario");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let capturarForm = new FormData(form);
  let pasarObj = convertirObj(capturarForm);
  datosStorage(pasarObj); 


  
  // let contenedorTable = document.getElementById("alumnos");
  
  // let nombreAlumno = formulario.querySelector("#nombre").value;

  // let apellidoAlumno = formulario.querySelector("#apellido").value;
  let datosArray = JSON.parse(localStorage.getItem("datos"));

  
  const alumnos = [];  
  alumnos.push(new Socio(datosArray[0].nombre, datosArray[0].apellido));
  clases[0].agregarAlumno(alumnos[0]);
  let clasesStorage = localStorage.setItem("clases", JSON.stringify(clases));


  
    let item = document.createElement("alumnos");
    item.innerHTML = `
  
  <h1 class="col-12 m-5">Alumnos</h1>  
  <p> Nombre: </p>
  <p> Apellido ${pasarObj.apellido} </p>
  <p> Clase: ${pasarObj.clase} </p>
  
  
  `;

    contenedorTable.append(item);
 
});


//let clasesStorage = localStorage.setItem("clases", JSON.stringify(clases));


document.addEventListener("DOMContentLoaded", () => {
  let datosGuardadosArray = JSON.parse(localStorage.getItem("clases")) || [];
  datosGuardadosArray.forEach((event) => {
    let contenedorTable = document.getElementById("div");
    let item = document.createElement("ul");
    item.innerHTML = `

        <h3>Clase: ${event._nombre}</h3>
        <li class:"mx-5">${event._alumnos[0]._nombre} ${event._alumnos[0]._apellido}</li>
           
    `;

    contenedorTable.append(item);
  });
});

