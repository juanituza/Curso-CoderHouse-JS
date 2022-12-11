

//Declaro una función para capitalizar cualquier texto, poner la 1er letra mayuscula y el resto minúscula
function capitalizarPrimeraLetra(str) {
  return ` ${str.charAt(0).toUpperCase()}${str.slice(1).toLocaleLowerCase()}`;
}

// genero las actividades que tendrá el gimnasio
// const clases = [];
// clases.push(new Actividad("Pilates", 1000));
// clases.push(new Actividad("Yoga", 950));
// clases.push(new Actividad("Danzas", 1100));

// localStorage.setItem("clases", JSON.stringify(clases));
// let Entrenador = document.getElementById("");

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
    
  

//Filtro por nombres de clases para usar mas adelante
// let nombreClases = clases.map((nombre) => nombre._nombre);

//obtengo el dato de bajo el id "actividad" y lo guardo en la variable para utlizarlo mas tarde
// let selectClases = document.getElementById("actividad");
//Función para mostras las clases en pantalla
// const mostrarClases = (arreglo, dato) => {
//   let elementos = "<option selected disabled> -->Seleccionar<-- </option>";

//   for (let i = 0; i < arreglo.length; i++) {
//     elementos +=
//       '<option id="tarea" value=" "' +
//       arreglo[i] +
//       '">' +
//       arreglo[i] +
//       "</option>";
//   }
//   dato.innerHTML = elementos;
// };
// //Utilizo la funcion con las clases creadas
// mostrarClases(nombreClases, selectClases);

// //Alert para el botón añadir
// let boton = document.getElementById("añadir");
// boton.addEventListener("click", () => {
//   Swal.fire({
//     icon: "success",
//     title: "Guardado!!",
//     text: "Socio guardado exitosamente!",
//   });
// });

const datosStorage = (obj) => {
  let datosArray = JSON.parse(localStorage.getItem("datos")) || [];
  //Ingreso los datos ingresados en el array para sumarlos y no se sobreescriba
  datosArray.push(obj);

  //Guardo el array en el localStorage
  return localStorage.setItem("datos", JSON.stringify(datosArray));
};



  // switch (e.target.name) {
  //   case "clase":
      // document
      //   .getElementById("nombre")
      //   .classList.remove("formulario__grupo-incorrecto"); 
      //   document
      //     .getElementById("nombre")
      //     .classList.add("formulario__grupo-correcto");   
      // break;
  //   case "nombre":
  //     if (expresiones.nombre.test(e.target.value)) {
  //     } else{
  //       document.getElementById("nombre").classList.add("formulario__grupo-incorrecto");  
  //     }
  //     break;
  // }
// };



// obtengo y utilizo DOM para mostrar los datos ingresados
let form = document.querySelector("form");
const clase = document.getElementById("clase").value;
let  claseCapital = capitalizarPrimeraLetra(clase);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    claseCapital === "Pilates" ||
    claseCapital === "Yoga" ||
    claseCapital === "Danzas"
  ) {
    const capturarForm = Object.fromEntries(new FormData(event.target));
    console.log(capturarForm);
    datosStorage(capturarForm);

    // localStorage.setItem("datos", JSON.stringify(capturarForm));
    // });
    // boton.addEventListener("click", () => {
    Swal.fire({
      icon: "success",
      title: "Guardado!!",
      text: "Socio guardado exitosamente!",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
    // form.addEventListener("submit", (event) => {
    //   event.preventDefault();
    // });
  }
});
// document.addEventListener("DOMContentLoaded", () => {
// let datosGuardadosArray = JSON.parse(localStorage.getItem("datos"));
// return datosGuardadosArray;
// });
// // Creo una funcion para guardar los datos ingresados en el localStorage
// const datosStorage = (obj) => {
//   let datosArray = JSON.parse(localStorage.getItem("datos")) || [];
//   //Ingreso los datos ingresados en el array para sumarlos y no se sobreescriba
//   datosArray.push(obj);
//   //Guardo el array en el localStorage
//   return (datosFinales = localStorage.setItem(
//     "datos",
//     JSON.stringify(datosArray)
//   ));
// };

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
// localStorage.setItem("clase", JSON.stringify(clases));
// funcion para guardar el dato del select
// const ShowSelected = () => {
//   /* Para obtener el texto */
//   var combo = document.getElementById("actividad");
//   var selected = combo.options[combo.selectedIndex].text;
//   return localStorage.setItem("select", JSON.stringify(selected));

// }

// let form2 = JSON.parse(localStorage.getItem("datos"));
// console.log(form2);
// const claseFilt =form2.filter((el) => el.clase.includes('pilates'));
// console.log(claseFilt);
const alumnoIngresado = () => {
  let form1 = JSON.parse(localStorage.getItem("datos")) || [];

  const alumnos = [];
  for (const dato of form1) {
    let nombre = capitalizarPrimeraLetra(dato.nombre);
    let apellido = capitalizarPrimeraLetra(dato.apellido);
    let actividad = capitalizarPrimeraLetra(dato.clase);

    alumnos.push(new Socio(nombre, apellido, actividad));
    // let alum = alumnos.reduce(
    //      (acc, el) => ({ ...acc, [el._apellido]: el }),
    //      {}
    //    );
  }
  return localStorage.setItem("Socio", JSON.stringify(alumnos));
};

// const formulario = JSON.parse(localStorage.getItem("datos")) || [];
// // console.log(formulario);
// const filtro = formulario.map((el) => el.actividad);
// const pilates = filtro.filter((el) => el === "Pilates");

// const yoga = filtro.filter((el) => el === "Yoga");

// console.log(pilates.actividad);
// const yoga = formulario.filter((el) => el.actividad.includes("Yoga"));
// const pila = pilates.reduce((acc, el) => ({ ...acc, [el.pilates]: el }), {});
// console.log(pila);

// const claseStorage = JSON.parse(localStorage.getItem("clase"));

// const contenedor = document.querySelector("#alumnos");

// claseStorage.forEach((e) => {
//   const { _idActividad, _nombre, _cuota, _alumnos } = e;
//   contenedor.innerHTML += `
//       <div class="card m-4 shadow" style="width: 18rem;">

//         <div class="card-body">
//           <h5 class="card-title"> ${_idActividad}-Clase:  ${_nombre}</h5>
//           <p class="card-text">Cuota: $${_cuota}</p>
//           <p>${_alumnos}</p>
//           </br>
//           <a href="../formulario.html" class="btn btn-primary">Ir a clase</a>
//         </div>
//      </div>

//    `;
// });

/* const pila = pilates.reduce((acc, el) => ({...acc, [el.apellido]:el, }),{});
  console.log(pila); */

// for (const comparacion of claseCapturada) {
//   let claseComparacion = comparacion.clase;
// for (const acti of formulario) {
//   let pilaCapturada = acti.actividad;
// }
// let select = JSON.parse(localStorage.getItem("select"));

alumnoIngresado();

// ----------------------------------PILATES---------------------------
//Filtro las clases Pilates para trear sus datos
let claseGuardado = JSON.parse(localStorage.getItem("clases"));
console.log(claseGuardado);
let clasePilates = claseGuardado.filter((el) => el._nombre.includes("Pilates"));
console.log(clasePilates);
let contenedorPilates = document.getElementById("Pilates");

clasePilates.forEach((element) => {
  let item = document.createElement("ul");
  item.innerHTML += `
    
    
    <p>Cuota: $${element._cuota}</p>
    <p>Profesor : ${element._entrenadores} </p>
    </hr>
    
    `;

  contenedorPilates.append(item);
});

//Traigo los alumnos que ingresaron pilates en el form y los muestro en pantalla
let alumnoGuardado = JSON.parse(localStorage.getItem("Socio"));
let pilates = alumnoGuardado.filter((el) => el._actividad.includes("Pilates"));

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
let contenedorYoga = document.getElementById("Yoga");

claseYoga.forEach((element) => {
  let item = document.createElement("ul");
  item.innerHTML += `
    
    
    <p class:"shadow">Cuota: $${element._cuota}</p>
    <p>Profesor : ${element._entrenadores} </p>
    
    `;

  contenedorYoga.append(item);
});

//Traigo los alumnos que ingresaron pilates en el form y los muestro en pantalla
let contenedorY = document.getElementById("Yoga");
let yoga = alumnoGuardado.filter((el) => el._actividad.includes("Yoga"));
console.log(yoga);
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

//Filtro las clases Yoga para trear sus datos
let claseDanzas = claseGuardado.filter((el) => el._nombre.includes("Danzas"));
let contenedorDanzas = document.getElementById("Danzas");

claseDanzas.forEach((element) => {
  let item = document.createElement("ul");
  item.innerHTML += `
    
    
    <p>Cuota: $${element._cuota}</p>
    <p>Profesor : ${element._entrenadores} </p>
    
    `;

  contenedorDanzas.append(item);
});

//Traigo los alumnos que ingresaron pilates en el form y los muestro en pantalla
let contenedorD = document.getElementById("Danzas");
let danzas = alumnoGuardado.filter((el) => el._actividad.includes("Danzas"));

danzas.forEach((element) => {
  let item = document.createElement("ul");

  item.innerHTML += `
        <li>Nombre:  ${element._nombre} ${element._apellido}</li>
        <li>Número de Socio: ${element._idSocio}</li>
        <hr/>
        `;
  contenedorD.append(item);
});
