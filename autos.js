function Auto(marca, modelo, precio, km, color, cuotas, anio, patente, vendido) {
    this.km = km;
    this.anio = anio;
    this.color = color;
    this.marca = marca;
    this.precio = precio;
    this.cuotas = cuotas;
    this.modelo = modelo;
    this.patente = patente;
    this.vendido = vendido;
};

/*
El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, 
cuyo precio es 150000, disponible en 12 cuotas, con la patente APL123 que no está vendido.

El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros, cuyo precio es 100000, 
disponible en 14 cuotas, con la patente JJK116 que no está vendido.

Cada auto debe tener los siguientes atributos: 
marca, modelo, precio, km, color, cuotas, anio, patente, vendido.
*/

let auto1 = new Auto(
    // marca, modelo, precio, km, color, cuotas, anio, patente, vendido.
    "Ford", "Fiesta", 150000, 200, "Azul", 12, 2019, "APL123", false
);

let auto2 = new Auto(
    // marca, modelo, precio, km, color, cuotas, anio, patente, vendido.
    "Toyota", "Corolla", 100000, 0, "Blanco", 14, 2019, "JJK116", false
);

module.exports = [auto1, auto2];