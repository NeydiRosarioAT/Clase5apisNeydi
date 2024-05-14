/* const url = https://jsonplaceholder.typicode.com/albums;

      fetch (url)
.then(res => res.json())
.then(res => console.log(res)) */

    // Creamos un array de objetos (por ejemplo, datos de estudiantes)
const estudiantes = [
    { id: 1, nombre: 'Juan', edad: 16 },
    { id: 2, nombre: 'María', edad: 17 },
    { id: 3, nombre: 'Carlos', edad: 16 },
    { id: 4, nombre: 'Juana', edad: 19 }
];


const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 16);

console.log(estudiantesMayores) /// UN ARRAY NUEVO FILTRADO

const encontrado = estudiantes.find(estudiante => estudiante.id === 2) // === ESTRICO IDENTICO

console.log(encontrado);

estudiantes.map(estudiante => {
    if (estudiante.nombre === "María") {
        estudiante.edad = 21;
    }
})

console.log(estudiantes);


const nuevoEstudiante =  { id: 5, nombre: 'Martin', edad: 14 }

estudiantes.push(nuevoEstudiante);

console.log(estudiantes);


const Menores = estudiantes.filter(estudiante => estudiante.edad<=18);
console.log(Menores);


const ordenados = estudiantes.sort((a,b) => a.edad - b.edad);

console.log(ordenados)