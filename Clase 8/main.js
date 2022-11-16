const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "zapato", precio: 1350 },
  { id: 4, nombre: "gorra", precio: 300 },
  { id: 4, nombre: "gorra", precio: 300 },
];


let contenedor = document.getElementById("contenedor");

productos.forEach(producto=>{
    let item = document.createElement("tr");
    item.innerHTML = `        
            <td>${producto.nombre}</td>                  
            <td>$${producto.precio}</td>    
    `;
    item.className="";
    contenedor.append(item);


})