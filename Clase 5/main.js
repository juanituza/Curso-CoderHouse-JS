/* function Producto(info) {
  this.nombre = info.nombre;
  this.precio = info.precio;
  this.imagen = info.imagen;
  this.color = info.color;
  this.peso = info.peso;
}

let producto = new Producto({
  peso: 234,
  nombre: "monitor",
  imagen: "asdf",
  color: "azul",
  precio: 123,
}); */

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  vender() {
    this.vendido = true;
  }
}

let producto1 = new Producto("Monitor gamer ...", 529900);
console.log(producto1);

producto1.vender();
console.log(producto1);
