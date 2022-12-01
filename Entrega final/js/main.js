//Declaro una función para capitalizar cualquier texto, poner la 1er letra mayuscula y el resto minúscula
function capitalizarPrimeraLetra(str) {
  return ` ${str.charAt(0).toUpperCase()}${str.slice(1).toLocaleLowerCase()}`;
}

// genero las actividades que tendrá el gimnasio
const clases = [];
clases.push(new Actividad("Pilates", 1000));
clases.push(new Actividad("Yoga", 950));
clases.push(new Actividad("Danzas", 1100));


const entrenador = [];
entrenador.push(new Profesor("Gabriela", "Fernandez", 1000));
entrenador.push(new Profesor("Luciana", "Ghio", 1500));
entrenador.push(new Profesor("Soledad", "Perez", 2000));

clases[0].agregarProfesor(entrenador[0]);
clases[1].agregarProfesor(entrenador[1]);
clases[2].agregarProfesor(entrenador[2]);
console.log(clases);


//Filtro por nombres de clases para usar mas adelante
let nombreClases = clases.map((nombre) => nombre._nombre);

//obtengo el dato de bajo el id "actividad" y lo guardo en la variable para utlizarlo mas tarde
let selectClases = document.getElementById("actividad");
//Función para mostras las clases en pantalla
const mostrarClases = (arreglo, dato) => {
  let elementos = "<option selected disabled> -->Seleccionar<-- </option>";

  for (let i = 0; i < arreglo.length; i++) {
    elementos +=
      '<option id="tarea" value="' +
      arreglo[i] +
      '">' +
      arreglo[i] +
      "</option>";
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
    title: "Guardado!!",
    text: "Socio guardado exitosamente!",
  });
});

// obtengo y utilizo DOM para mostrar los datos ingresados
let form = document.getElementById("formulario");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let capturarForm = new FormData(form);
  let pasarObj = convertirObj(capturarForm);
  datosStorage(pasarObj);

  // let contenedorTable = document.getElementById("alumnos");
  // let item = document.createElement("ul");

  // item.innerHTML = `
  // <h3>Clase: ${pasarObj.clase}</h3>
  // <li>Nombre: ${pasarObj.nombre} ${pasarObj.apellido}</li>        
  
  //       `;
  
  // contenedorTable.append(item);
});

// Guardo los datos para mostrarlos de forma permanente en la pantalla, por mas que se recargue
// document.addEventListener("DOMContentLoaded", () => {
//   let datosGuardadosArray = JSON.parse(localStorage.getItem("datos")) || [];
//   datosGuardadosArray.forEach((event) => {
//     let contenedorTable = document.getElementById("alumnos");
//     let item = document.createElement("ul");

//     item.innerHTML = `
//     <h3>Clase: ${event.clase} </h3>
//     <li>Nombre: ${event.nombre} ${event.apellido}</li>        
    
    
//     `;

//     contenedorTable.append(item);
//   });
// });

let form1 = JSON.parse(localStorage.getItem("datos")) || [];

alumnos = [];


let claseCapturada = form1;
console.log(claseCapturada[0]);


// for (const comparacion of claseCapturada) {
//   let claseComparacion = comparacion.clase;
for (let i = 0; i < claseCapturada.length; i++) { 
  console.log(claseCapturada[i].clase);

  if (claseCapturada[i].clase === "Pilates") {
    for (const formu of form1) {
      let nombre = formu.nombre;
      let apellido = formu.apellido;

      alumnos.push(new Socio(nombre, apellido));
      // localStorage.setItem("socios", JSON.stringify(alumnos));
    }
    for (const socio of alumnos) {
      let pilates1 = socio;

      clases[0].agregarAlumno(pilates1);
    }
    let pilatesFinal = clases[0];

    localStorage.setItem("pilates", JSON.stringify(pilatesFinal));

    // document.addEventListener("DOMContentLoaded", () => {
    let datosGuardadosPilates = JSON.parse(localStorage.getItem("pilates"));

    let contenedorTable = document.getElementById("alumnos");
    let item = document.createElement("ul");

    item.innerHTML = `
        <h3>Clase: ${datosGuardadosPilates._nombre}</h3>
        <li>Nombre: ${datosGuardadosPilates._alumnos[0]._nombre} 
          ${datosGuardadosPilates._alumnos[0]._apellido}  </li>
        <li>Cuota: ${datosGuardadosPilates._cuota} </li>
        <li>Profesor : ${datosGuardadosPilates._entrenadores[0]._nombre} ${datosGuardadosPilates._entrenadores[0]._apellido} </li>

        `;

    contenedorTable.append(item);
  } else if (claseCapturada[i].clase === "Yoga") {
    for (const formu of form1) {
      let nombre = formu.nombre;
      let apellido = formu.apellido;

      alumnos.push(new Socio(nombre, apellido));
      // localStorage.setItem("socios", JSON.stringify(alumnos));
    }
    for (const socio of alumnos) {
      let yoga1 = socio;

      clases[1].agregarAlumno(yoga1);
    }
    let yogaFinal = clases[1];

    localStorage.setItem("yoga", JSON.stringify(yogaFinal));

    let datosGuardadosYoga = JSON.parse(localStorage.getItem("yoga"));

    let contenedorTable = document.getElementById("alumnos");
    let item = document.createElement("ul");

    item.innerHTML = `
        <h3>Clase: ${datosGuardadosYoga._nombre}</h3>
        <li>Nombre: ${datosGuardadosYoga._alumnos[1]._nombre} 
          ${datosGuardadosYoga._alumnos[1]._apellido}  </li>
        <li>Cuota: ${datosGuardadosYoga._cuota} </li>
        <li>Profesor : ${datosGuardadosYoga._entrenadores[0]._nombre} ${datosGuardadosYoga._entrenadores[0]._apellido} </li>

        `;

    contenedorTable.append(item);
  } else {
    for (const clase of alumnos) {
      let danzas1 = clase;
      clases[2].agregarAlumno(danzas1);
    }
    let danzasFinal = clases[2];

    localStorage.setItem("danzas", JSON.stringify(danzasFinal));

    let datosGuardadosDanzas = JSON.parse(localStorage.getItem("danzas"));

    let contenedorTable = document.getElementById("alumnos");
    let item = document.createElement("ul");

    item.innerHTML = `
        <h3>Clase: ${datosGuardadosDanzas._nombre}</h3>
        <li>Nombre: ${datosGuardadosDanzas._alumnos[1]._nombre} 
          ${datosGuardadosDanzas._alumnos[1]._apellido}  </li>
        <li>Cuota: ${datosGuardadosDanzas._cuota} </li>
        <li>Profesor : ${datosGuardadosDanzas._entrenadores[0]._nombre} ${datosGuardadosDanzas._entrenadores[0]._apellido} </li>

        `;

    contenedorTable.append(item);
  }
}
// Guardo los datos para mostrar de forma permanente los datos en la pantalla, por mas que se recargue
