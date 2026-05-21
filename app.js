const alumnos = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Constanza", edad: 20},
  { nombre: "Marcos", edad: 21},
  { nombre: "Laura", edad: 22},
  { nombre: "Ricardo", edad: 24}
]

function mostrarAlumnos() {
  console.log("Lista de alumnos:");
  alumnos.forEach(alumno => {
    console.log(`El Nombre del alumno: ${alumno.nombre}, y su Edad: ${alumno.edad}`);
  });
}

mostrarAlumnos();
