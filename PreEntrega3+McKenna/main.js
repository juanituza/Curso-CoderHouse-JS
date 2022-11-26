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
  }
  get idSocio() {
    return this.idSocio;
  }

  // metodo toString para retornar datos de la clase.
  toString() {
    return `${super.toString()}, Número de socio:${
      this._idSocio
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
}

//Declaro una función para capitalizar cualquier texto, poner la 1er letra mayuscula y el resto minúscula
function capitalizarPrimeraLetra(str) {
  return ` ${str.charAt(0).toUpperCase()}${str.slice(1).toLocaleLowerCase()}`;
}

// genero las actividades que tendrá el gimnasio
const clases = [];
clases.push(new Actividad("Pilates", 1000));
clases.push(new Actividad("Yoga", 950));
clases.push(new Actividad("Danzas", 1100));

//Filtro por nombres de clases para usar mas adelante
let nombreClases = clases.map((nombre) => nombre._nombre);
// Genero una funcion para mostrar las clases en el select
let selectClases = document.getElementById("actividad");
const mostrarClases = (arreglo, dato) => {
  let elementos = "<option selected disabled> -->Seleccionar<-- </option>";

  for (let i = 0; i < arreglo.length; i++) {
    elementos +=
      '<option value="' + arreglo[i] + '">' + arreglo[i] + "</option>";
  }
  dato.innerHTML = elementos;
};
//Utilizo la funcion con las clases creadas
mostrarClases(nombreClases, selectClases);

//Funcion para convertir a un objeto lo capturado en el Form
const convertirObj = (capturarForm) => {
  let nombre = capturarForm.get("nombre");
  let nombreCapi = capitalizarPrimeraLetra(nombre);
  let apellido = capturarForm.get("apellido");
  let apellidoCapi = capitalizarPrimeraLetra(apellido);
  let clase = capturarForm.get("actividad");

  return { nombre: nombreCapi, apellido: apellidoCapi, clase: clase };
};

//Creo una funcion para guardar los datos ingresados en el localStorage
const datosStorage = (obj) => {
  let datosArray = JSON.parse(localStorage.getItem("datos")) || [];
  //Ingreso los datos ingresados en el array para sumarlos y no se sobreescriba
  datosArray.push(obj);
  //Guardo el array en el localStorage
  return (datosFinales = localStorage.setItem(
    "datos",
    JSON.stringify(datosArray)
  ));
};
//Alert para el botón añadir
let boton = document.getElementById("añadir");
boton.addEventListener("click", () => {
  Swal.fire({
    icon: "success",
    title: "Guardado...",
    text: "Socio guardado exitosamente!",
  });
});


// obtengo y utilizo DOM para mostrar los datos ingresador
let form = document.getElementById("formulario");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let capturarForm = new FormData(form);
  let pasarObj = convertirObj(capturarForm);
  datosStorage(pasarObj);

  let contenedorTable = document.getElementById("alumnos");

  let item = document.createElement("alumnos");
  item.innerHTML = `
        <li>Nombre: ${pasarObj.nombre}</li>
        <li>Nombre: ${pasarObj.apellido}</li>        
        <li class:"mx-5">Clase: ${pasarObj.clase}</li>  
  `;

  contenedorTable.append(item);
});

// Guardo los datos para mostrar de forma permanente los datos en la pantalla, por mas que se recargue
document.addEventListener("DOMContentLoaded", () => {
  let datosGuardadosArray = JSON.parse(localStorage.getItem("datos")) || [];
  datosGuardadosArray.forEach((event) => {
    let contenedorTable = document.getElementById("alumnos");
    let item = document.createElement("ul");

    // let pilate = clases.filter((item) => item._nombre === "pilates");
    // console.log(pilate);

    item.innerHTML = `
        <li>Nombre: ${event.nombre}</li>
        <li>Nombre: ${event.apellido}</li>        
        <li class:"mx-5">Clase: ${event.clase}</li>
        
        `;

    contenedorTable.append(item);
  });
});
