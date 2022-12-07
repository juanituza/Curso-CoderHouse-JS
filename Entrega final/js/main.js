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

//obtengo el dato de bajo el id "actividad" y lo guardo en la variable para utlizarlo mas tarde
let selectClases = document.getElementById("actividad");
//Función para mostras las clases en pantalla
const mostrarClases = (arreglo, dato) => {
  let elementos = "<option selected disabled> -->Seleccionar<-- </option>";

  for (let i = 0; i < arreglo.length; i++) {
    elementos +=
      '<option id="tarea" value=" "' +
      arreglo[i] +
      '">' +
      arreglo[i] +
      "</option>";
  }
  dato.innerHTML = elementos;
};
//Utilizo la funcion con las clases creadas
mostrarClases(nombreClases, selectClases);

//Alert para el botón añadir
let boton = document.getElementById("añadir");
boton.addEventListener("click", () => {
  Swal.fire({
    icon: "success",
    title: "Guardado!!",
    text: "Socio guardado exitosamente!",
  });
});

const datosStorage = (obj) => {
  let datosArray = JSON.parse(localStorage.getItem("datos")) || [];
  //Ingreso los datos ingresados en el array para sumarlos y no se sobreescriba
  datosArray.push(obj);

  //Guardo el array en el localStorage
  return localStorage.setItem("datos", JSON.stringify(datosArray));
};

// obtengo y utilizo DOM para mostrar los datos ingresados
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const capturarForm = Object.fromEntries(new FormData(event.target));
  datosStorage(capturarForm);
  // localStorage.setItem("datos", JSON.stringify(capturarForm));
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
const alumnoIngresado = () => {
  let form1 = JSON.parse(localStorage.getItem("datos")) || [];
  
  const alumnos = [];
  for (const dato of form1) {
    let nombre = capitalizarPrimeraLetra(dato.nombre);
    let apellido = capitalizarPrimeraLetra(dato.apellido);
    alumnos.push(new Socio(nombre, apellido));
    // let alum = alumnos.reduce(
    //      (acc, el) => ({ ...acc, [el._apellido]: el }),
    //      {}
    //    );
      
    }
    localStorage.setItem("socio", JSON.stringify(alumnos));
    
  };
  // funcion para guardar el dato del select
  const ShowSelected = () => {
    /* Para obtener el texto */
    var combo = document.getElementById("actividad");
    var selected = combo.options[combo.selectedIndex].text;
    localStorage.setItem("select", JSON.stringify(selected));
}


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
let select = JSON.parse(localStorage.getItem("select"));


alumnoIngresado();
let alums = JSON.parse(localStorage.getItem("socio"))|| [];
 let alum = alums.reduce(
       (acc, el) => ({ ...acc, [el._apellido]: el }),
       {}
     );

console.log(alum);




// const getLastArrItem = (array) => {
//   let lastItem = array[array.length - 1];
  
// };  
if (select === "Pilates") {
  console.log("hola");
  
  clases[0].agregarAlumno(alum);
  console.log(clases[0]);
    
    localStorage.setItem("clasePilates", JSON.stringify(clases[0]));
  let datosGuardadosPilates = JSON.parse(localStorage.getItem("clasePilates"));

  // const contenedor = document.querySelector("#alumnos");
  // datosGuardadosPilates.forEach((element) => {
  //   console.log(element);
  // });

  let contenedorTable = document.getElementById("alumnos");

  let item = document.createElement("ul");

  item.innerHTML = `
        <h3>Clase: ${datosGuardadosPilates._nombre}</h3>
        <li>Nombre: ${datosGuardadosPilates._alumnos[0]._nombre}  ${datosGuardadosPilates._alumnos[0]._apellido}
            </li>
        <li>Cuota: ${datosGuardadosPilates._cuota} </li>
        <li>Profesor : </li>
        <hr/>
        `;

  contenedorTable.append(item);
} else if (select === "Yoga") {
  console.log("CHAU");
for (const alumno of alums) {
  clases[1].agregarAlumno(alumno);
}
  
   // const mappedAlumno =
   // Object.keys(alumnoPila).map(key =>{const value = alumnoPila[key]
   // console.log(value);})
   // console.log(alumnoPila);

   // alumnos.push(new Socio(pilates));
   // console.log(alumnos);
   // clases[0].agregarAlumno(alumnos);
   // clases[0]._alumnos = [pila];

   // const socioPila = clases[0]._alumnos.reduce((acc,el) =>acc.concat(el), [])
   // console.log(socioPila);
   // console.log(clases[0]._alumnos[0]["juan"].nombre);
   // console.log(clases[0]);
   localStorage.setItem("claseYoga", JSON.stringify(clases[1]));
  
  const contenedor = document.querySelector("#alumnos");
  let datosGuardadosYoga = JSON.parse(localStorage.getItem("claseYoga"));
  


  let item = document.createElement("ul");

  item.innerHTML = `
        <h3>Clase: ${datosGuardadosYoga._nombre}</h3>
        <li>Nombre: ${datosGuardadosYoga._alumnos[0]._nombre}  ${datosGuardadosYoga._alumnos[0]._apellido}
            </li>
        <li>Cuota: ${datosGuardadosYoga._cuota} </li>
        <li>Profesor : </li>
        <hr/>
        `;

  contenedor.append(item);
}
