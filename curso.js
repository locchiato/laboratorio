/*

notas y faltas
la nota determina aprobacion
la cantidad de faltas altera la nota de aprobacion

alu.cantidad_de_faltas == this.max_faltas
=> 6 * 1.1 = 6.6 nueva nota de aprobacion

la nota determina aprobacion
tu promedio debe ser mayor a 6.6            

*/

let curso = {
    nombre_del_curso: "Curso A",
    nota_de_aprobacion: 6,
    max_faltas: 4,
    lista_de_estudiantes: [1, 3, 5, 6, , , , 0],
    agregar_alumno: function(...alus) {
        this.lista_de_estudiantes.push(...alus);
    },
    aprobo_el_curso: function(alu) {
        if (alu.calcular_promedio() < this.nota_de_aprobacion ||
            alu.cantidad_de_faltas > this.max_faltas) {
            return false;
        } else if (alu.cantidad_de_faltas === this.max_faltas) {
            return alu.calcular_promedio() > this.nota_de_aprobacion * 1.1;
        }
        return alu.calcular_promedio() > this.nota_de_aprobacion;
    },
    recorrer_lista: function() {
        let aprobados = [];
        for (let i = 0; i < this.lista_de_estudiantes.length; i++) {
            const alu = this.lista_de_estudiantes[i];
            aprobados.push(this.aprobo_el_curso(alu));
        }
        return aprobados;
    }
};

module.exports = curso;