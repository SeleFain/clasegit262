const alumnos = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Geronimo", edad: 20 },
  { nombre: "Lucia", edad: 22 },
  { nombre: "Lucia", edad: 20},
  { nombre: "Mateo", edad: 23},
  { nombre: "Emilia", edad: 21},
  { nombre: "Blue", edad: 22},
]

function mostrarAlumnos() {
  console.log("Lista de alumnos:");
  alumnos.forEach(alumno => {
    console.log(`El Nombre del alumno: ${alumno.nombre}, y su Edad: ${alumno.edad}`);
  });
}

mostrarAlumnos();
