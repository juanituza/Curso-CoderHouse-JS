

//Declaro una función para capitalizar cualquier texto, poner la 1er letra mayuscula y el resto minúscula
function capitalizarPrimeraLetra(str) {
  return ` ${str.charAt(0).toUpperCase()}${str.slice(1).toLocaleLowerCase()}`;
}
// Utilizo el archivo json a través del fetch
const clases = [];
fetch("./entrenadores.json")
  .then((response) => response.json())
  .then((entrenadores) => {
    
    entrenadores.forEach((entrenador) => {
      clases.push(
        new Actividad(entrenador.clase, entrenador.cuota, entrenador.Entrenadores)
      );
    });
      localStorage.setItem("clases", JSON.stringify(clases));
  });

// Función para guardar los datos en el localStorage 
const datosStorage = (obj) => {
  let datosArray = JSON.parse(localStorage.getItem("datos")) || [];
  //Ingreso los datos ingresados en el array para sumarlos y no se sobreescriba
  datosArray.push(obj);

  //Guardo el array en el localStorage
  return localStorage.setItem("datos", JSON.stringify(datosArray));
};


 
// Función para guardar en un array como alumnos en un array y los guardo en el storage
const alumnoIngresado = () => {
  let form1 = JSON.parse(localStorage.getItem("datos")) || [];

  const alumnos = [];
  for (const dato of form1) {
    let nombre = capitalizarPrimeraLetra(dato.nombre);
    let apellido = capitalizarPrimeraLetra(dato.apellido);
    let actividad = capitalizarPrimeraLetra(dato.clase);

    alumnos.push(new Socio(nombre, apellido, actividad));
   
  }
  return localStorage.setItem("Socio", JSON.stringify(alumnos));
};
// obtengo los datos del form y a aplico el submit 
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let clase = document.getElementById("clase").value;
  let  claseCapital = clase;
  console.log(claseCapital);
  // Condicional para que el usuario ingrese bien la clase
  if (clase === "Pilates" || clase === "Yoga" || clase === "Danzas") {
    const capturarForm = Object.fromEntries(new FormData(event.target));
    console.log(capturarForm);
    datosStorage(capturarForm);

    Swal.fire({
      icon: "success",
      title: "Guardado!!",
      text: "Socio guardado exitosamente!",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Clase erronea!!",
      text: "Ingrese Pilates,Yoga o Danzas",
    });
  }
  });

// utilizo la funcion del alumno ingresado para luego mostrarlos en pantalla
alumnoIngresado();

// ----------------------------------PILATES---------------------------
//Parseo las clases guardadas
let claseGuardado = JSON.parse(localStorage.getItem("clases"));
//Filtro las clases Pilates para trear sus datos
let clasePilates = claseGuardado.filter((el) => el._nombre.includes("Pilates"));
// Muestro en pantalla la clase "Pilates"
let contenedorPilates = document.getElementById("Pilates");
clasePilates.forEach((element) => {
  let item = document.createElement("ul");
  item.innerHTML += `
          <h5 class="card-title">Pilates</h5>
          <p class="card-text">Cuota: $${element._cuota}</p>
          <p>Profesor : ${element._entrenadores} </p>
          <hr/>
          <hr/>
      `;
  contenedorPilates.append(item);
});

//Traigo los alumnos que ingresaron pilates en el form y los muestro en pantalla
let alumnoGuardado = JSON.parse(localStorage.getItem("Socio"));
// Filtro los alumnos que ingresaron por Pilates
let pilates = alumnoGuardado.filter((el) => el._actividad.includes("Pilates"));

//Muestro los alumnos en la card de pilates con una "ul"
let contenedorP = document.getElementById("Pilates");
pilates.forEach((element) => {
  let item = document.createElement("ul");
  item.innerHTML += `
    
    <li>Nombre:  ${element._nombre} ${element._apellido}</li>
    <li>Número de Socio: ${element._idSocio}</li>
    <hr/>
    
    `;

  contenedorP.append(item);
});

// ---------------------------YOGA---------------------------

//Filtro las clases Yoga para trear sus datos
let claseYoga = claseGuardado.filter((el) => el._nombre.includes("Yoga"));
// Muestro en pantalla la clase "Yoga"
let contenedorYoga = document.getElementById("Yoga");
claseYoga.forEach((element) => {
  let item = document.createElement("ul");
  item.innerHTML += `
          <h5 class="card-title">Yoga</h5>
          <p class="card-text">Cuota: $${element._cuota}</p>
          <p>Profesor : ${element._entrenadores} </p>
          <hr/>
          <hr/>
    `;
  contenedorYoga.append(item);
});

//Traigo los alumnos que ingresaron yoga en el form y los muestro en pantalla
let contenedorY = document.getElementById("Yoga");
// Filtro los alumnos que ingresaron por Yoga
let yoga = alumnoGuardado.filter((el) => el._actividad.includes("Yoga"));3
//Muestro los alumnos en la card de yoga con una "ul"
yoga.forEach((element) => {
  let item = document.createElement("ul");

  item.innerHTML += `
        <li>Nombre:  ${element._nombre} ${element._apellido}</li>
        <li>Número de Socio: ${element._idSocio}</li>
        <hr/>
        `;
  contenedorY.append(item);
});

//-----------------------------DANZAS------------------------------------

//Filtro las clases danzas para trear sus datos
let claseDanzas = claseGuardado.filter((el) => el._nombre.includes("Danzas"));
// Muestro en pantalla la clase "danzas"
let contenedorDanzas = document.getElementById("Danzas");

claseDanzas.forEach((element) => {
  let item = document.createElement("ul");
  item.innerHTML += `
          <h5 class="card-title">Danzas</h5>
          <p class="card-text">Cuota: $${element._cuota}</p>
          <p>Profesor : ${element._entrenadores} </p>
          <hr/>
          <hr/>
    `;

  contenedorDanzas.append(item);
});

//Traigo los alumnos que ingresaron danzas en el form y los muestro en pantalla
let contenedorD = document.getElementById("Danzas");
let danzas = alumnoGuardado.filter((el) => el._actividad.includes("Danzas"));
//Muestro los alumnos en la card de danzas con una "ul"
danzas.forEach((element) => {
  let item = document.createElement("ul");

  item.innerHTML += `
        <li>Nombre:  ${element._nombre} ${element._apellido}</li>
        <li>Número de Socio: ${element._idSocio}</li>
        <hr/>
        `;
  contenedorD.append(item);
});

