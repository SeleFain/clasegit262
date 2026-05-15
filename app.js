const alumnos = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
  { nombre: "Ana", edad: 21 }
]

function mostrarAlumnos() {
  console.log("Lista de alumnos:");
  alumnos.forEach(alumno => {
    console.log(`El Nombre del alumno: ${alumno.nombre}, Edad: ${alumno.edad}`);
  });
}

mostrarAlumnos();