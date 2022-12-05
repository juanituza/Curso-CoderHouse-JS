const clases = [];
clases.push(new Actividad("Pilates", 1000));
clases.push(new Actividad("Yoga", 950));
clases.push(new Actividad("Danzas", 1100));


localStorage.setItem("clase", JSON.stringify(clases));

const claseStorage = JSON.parse(localStorage.getItem("clase"));

const contenedor = document.querySelector("#alumnos");

claseStorage.forEach((e) => {
  const { _idActividad, _nombre, _cuota, _alumnos } = e;
  contenedor.innerHTML += `
      <div class="card m-4 shadow" style="width: 18rem;">
         
        <div class="card-body">
          <h5 class="card-title">Clase: ${_nombre}</h5>
          <p class="card-text">Cuota: $${_cuota}</p>
          <p>${_alumnos[0]} </p>
          <a href="../formulario.html" class="btn btn-primary">Ir a Clase</a>
        </div>
     </div>



   `;
});
