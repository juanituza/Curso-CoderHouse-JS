let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if (usuarioStorage) {
  usuario = usuarioStorage;
  let mensaje = `Bienvenido nuevamente ${usuario}`;
  alert(mensaje);
} else {
  usuario = prompt("por favor ingrese su usuario");
  alert("Bienvenido por primera vez");
  sessionStorage.setItem("usuario", usuario);
}
