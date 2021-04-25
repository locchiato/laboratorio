function Alumno(...params) {
    this.nombre = params[0];
    this.cantidad_de_faltas = params[1];
    this.notas = params[2];
    this.calcular_promedio = function() {
        let suma = 0;
        this.notas.map(nota => suma += nota);
        return suma / this.notas.length;
    };
    this.faltar = function() {
        this.cantidad_de_faltas++;
    };
}

module.exports = Alumno;