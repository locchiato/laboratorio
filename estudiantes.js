const Alumno = require('./alumno');

let alumno1 = new Alumno("Laura Diaz", 5, [10, 9, 8, 7, 6]);

module.exports = [
    alumno1,
    new Alumno("Marta Ruiz", 7, [10, 9, 8, 7, 6]),
    new Alumno("Carlos Pais", 2, [10, 9, 8, 7, 6]),
    new Alumno("Flor Vega", 3, [10, 9, 8, 7, 6])
];