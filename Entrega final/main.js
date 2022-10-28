//Solicitar al usuario que elija clase
let clase = prompt(
  "Ingrese clase que desea consultar o realizar: PILATES, YOGA o DANZAS"
).toLocaleLowerCase();
// Solicitar al usuario la cantidad de clases que quiere realizar
let cantidad = Number(prompt("Ingrese cantidad de clases a tomar por semana"));

// Se declaran profesores de las clases
class Profesor {
  constructor(info) {
    this.nombre = info.nombre;
  }

  //Metodo para asignar profesor a una clase
  asignarClase() {
    //Condicional de acuerdo a lo elegido e imprimir en pantalla el resultado
    if (clase === "pilates") {
      alert(
        `la profesora es ${profesor1.nombre} y el precio mensual es:  $${precioFinalPilate}`
      );
    } else if (clase === "yoga") {
      alert(
        `la profesora es ${profesor1.nombre} y el precio mensual es: $${precioMensual}`
      );
    } else if (clase === "danzas") {
      alert(
        `la profesora es ${profesor2.nombre} y el precio mensual es: $${precioMensual}`
      );
    } else {
      alert("La clase no se brinda en el gimnasio");
    }
  }
}

//Se declara clase Alumno
class Alumno {
  constructor(info) {
    this.nombre = info.nombre;
    this.abonoMensual = info.abonoMensual;
  }
}

// Clase para definir tipo de clase a realizar en el gimnasio
class Clase {
  //constructor clase Clase
  constructor(info) {
    this.nombre = info.nombre;
    this.precio = info.precio;
    this.horario = info.horario;
    /* this.profesor=info.profesor;
    this.alumno=info.alumno; */
  }

  //Metodo con switch para calcular el precio que debería abonar
  calcularPrecio(clase, cantidad) {
    switch (clase) {
      case "pilates":
        let precioFinalPilate = pilates.precioP * cantidad;
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
  }
}

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
profesor2.asignarClase();
