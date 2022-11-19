/*  let productos = [
  { id: 1, nombre: "Arroz", precio: 125 },
  { id: 2, nombre: "Fideo", precio: 70 },
  { id: 3, nombre: "Pan", precio: 50 },
  { id: 4, nombre: "Flan", precio: 100 },
];

localStorage.setItem("productos", JSON.stringify(productos)); */
// const modificarPrecioProducto = (nombre, precio) => {
//   let productosStorage = JSON.parse(localStorage.getItem("productos"));
//   let producto = productosStorage.find((item) => item.nombre === nombre);

//   producto.precio = precio;

//   localStorage.setItem("productos", JSON.stringify(productosStorage));
// };

const eliminarProducto = (id) => {
    let storage = JSON.parse(localStorage.getItem("productos"));
    let nuevoStorage = storage.filter((item) => item.id != id);
    localStorage.setItem("productos", JSON.stringify(nuevoStorage));
    producto.id = (id);
}

// let nombre = prompt("Ingrese el nombre");
// let precio = parseInt(prompt("Ingrese el precio"));

// modificarPrecioProducto(nombre, precio);



