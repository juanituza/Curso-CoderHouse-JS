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
clases.push(new Actividad("pilates", 1000));
clases.push(new Actividad("yoga", 950));
clases.push(new Actividad("danzas", 1100));


// clases[0].agregarProfesor(entrenadores[0]);
// clases[1].agregarProfesor(entrenadores[1]);
clases[2].agregarProfesor(entrenadores[1]);

// filtro los nombres y apellidos de los profesores para mostrar en pantalla luego
let nombresProfesores = entrenadores.map((nombre) => nombre._nombre);
let apellidoProfesores = entrenadores.map((apellido) => apellido._apellido);
let profesorNombre = `${nombresProfesores} ${apellidoProfesores}`;

// filtro las cuotas de las clases  para mostrar en pantalla luego
let cuotasClases = clases.map((cuota) => cuota._cuota);
let clasesStorage = localStorage.setItem(
  "clases",
  JSON.stringify(clases)
);



let nombreClases = clases.map((nombre) => nombre._nombre);
let pilate = clases.filter((item)=>item._nombre === "pilates");
let yoga = clases.filter((item) => item._nombre === "yoga");
let danza = clases.filter((item)=>item._nombre === "danzas");

let selectClases = document.getElementById("actividad");

const mostrarClases = (arreglo, dato) => {
  let elementos = '<option selected disabled> <--Seleccionar--> </option>';

  for (let i = 0; i < arreglo.length; i++) {
    elementos +='<option value="' + arreglo[i] + '">' + arreglo[i] + "</option>";      
    }
    dato.innerHTML=elementos;  
  }

mostrarClases(nombreClases, selectClases);

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  //Capturo el nombre del socio
  let nombreSocio = document.getElementById("nombre").value;
  //aplico la funcion de capitalizar la letra al nombre ingresado
  let nombre1 = capitalizarPrimeraLetra(nombreSocio);

  //Capturo el apellido del socio
  let apellidoSocio = document.getElementById("apellido").value;
  //aplico la funcion de capitalizar la letra al apellido ingresado
  let apellido1 = capitalizarPrimeraLetra(apellidoSocio);
  let socio = `${nombre1} ${apellido1}`;
  let socioFinal = localStorage.setItem("socio", JSON.stringify(socio));

  //Capturo la actividad elegida
  let actividad = document.getElementById("actividad").value;
  let actividadFinal = localStorage.setItem("actividad",JSON.stringify(actividad));
  
});
let actividadStorage = JSON.parse(localStorage.getItem("actividad"));


let socioStorage= JSON.parse(localStorage.getItem("socio"));
let cuotasStorage= JSON.parse(localStorage.getItem("cuota"));


if (actividadStorage === "danzas") {
  let contenedor = document.getElementById("div-table");

  let item = document.createElement("tbody");
  item.innerHTML = `
    
        <tr>                
          <td>${clases[2]._entrenadores[0]}</td>                  
          <td> ${socioStorage}</td>  
          <td>${clases[2]._cuota}</td>
          <td>${clases[2]._nombre}</td>
        </tr>                 
                
    `;
  item.className = "";
  contenedor.append(item);
}

// imprimirClase(socioStorage,actividadStorage);


// return (alumno = nombreSocio + " " + apellidoSocio + " " + actividad);
// genero los alumnos que tendrá el gimnasio
// const alumnos = [];
// alumnos.push(new Socio(nombreSocio, apellidoSocio));
// //filtro por nombre y apellido al socio
// let nombreAlumno = alumnos.map((nombre) => nombre._nombre);
// let apellidoAlumno = alumnos.map((apellido) => apellido._apellido);

// Metodo con switch para calcular el precio que debería abonar
// function calcularPrecio(clase, cantidad) {
//   switch (clase) {
//     case "pilates":
//       let precioFinalPilate = cuotasClases[0] * cantidad;
//       return precioFinalPilate;

//     case "yoga":
//       let precioFinalYoga = cuotasClases[1] * cantidad;
//       return precioFinalYoga;

//     case "danzas":
//       let precioFinalDanzas = cuotasClases[2] * cantidad;
//       return precioFinalDanzas;

//     default:
//       alert("La clase no se da en el gimnasio");
//       break;
//   }
// }

// let precioFinal = calcularPrecio(clase, cantidad);

// //Condicional de acuerdo a lo elegido e imprimir en pantalla el resultado

  /* alert(
//     `la profesora es ${nombresProfesores[0]} ${apellidosProfesores[0]} , el alumno es ${nombre1} ${apellido1} y el precio de la clase es: $${precioFinal} 
//     `
//   ); */
// } else if (clase === "yoga") {
//   alert(
//     `la profesora es ${nombresProfesores[1]} ${apellidosProfesores[1]} , el alumno es ${nombre1} ${apellido1} y el precio de la clase es: $${precioFinal}`
//   );
// } else if (clase === "danzas") {
//   alert(
//     `la profesora es ${nombresProfesores[2]} ${apellidosProfesores[2]}, el alumno es ${nombre1} ${apellido1} y el precio de la clase es: $${precioFinal}`
//   );
// } else {
//   alert("La clase no se brinda en el gimnasio");
// }

// let mostrarValores = () => {
  
// };

// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let inputs = e.target.children;
//   console.log(inputs[0].value);
//   console.log(inputs[1].value);
// });


// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let inputs = e.target.children;
//   console.log(inputs[0].value);
//   console.log(inputs[1].value);
// });
// <form id="formulario">
//   <input type="text" />
//   <input type="number" />
//   <input type="submit" value="Enviar" />
// </form>;
