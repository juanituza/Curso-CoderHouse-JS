class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}
for (let index = 0; index < 5; index++) {
  let nombre = prompt("Ingrese el nombre");
  let precio = prompt("Ingrese el precio");
  let objeto = new Producto(productos.length + 1, nombre, precio);
  productos.push(objeto);
}
console.log(productos);
