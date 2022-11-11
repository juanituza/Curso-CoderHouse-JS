//Solicitar al usuario que elija clase 
let clase = prompt(
  "Ingrese clase que desea consultar o realizar: PILATES, YOGA o DANZAS"
).toLocaleLowerCase();

// Se declaran profesores de las clases
let profesor1 = "Gabriela";
let profesor2 = "Luciana";

// Solicitar al usuario la cantidad de clases que quiere realizar
let cantidad = Number(prompt("Ingrese cantidad de clases a tomar por semana"));

//Funcion con switch para calcular el precio que debería abonar
let alumno = (clase, cantidad) => {
  switch (clase) {
    case "pilates":
      let precioPila = 100;
      let precioFinalPilate = precioPila * cantidad;
      return precioFinalPilate;
    case "yoga":
      let precioYoga = 150;
      let precioFinalYoga = precioYoga * cantidad;
      return precioFinalYoga;
    case "danzas":
      let precioDanza = 200;
      let precioFinalDanza = precioDanza * cantidad;
      return precioFinalDanza;

    default:
      "La clase no se da en el gimnasio";
      break;
  }
};

//calculo de precio final que solicito el usuario
let precioMensual = alumno(clase, cantidad);

//Condicional de acuerdo a lo elegido e imprimir en pantalla el resultado
if (clase === "pilates") {
  alert(
    `la profesora es ${profesor1} y el precio mensual es:  $${precioMensual}`
  );
} else if (clase === "yoga") {
  alert(
    `la profesora es ${profesor1} y el precio mensual es: $${precioMensual}`
  );
} else(clase === "danzas") {
  alert(`la profesora es ${profesor2} y el precio mensual es: $${precioMensual}`
  );
};
