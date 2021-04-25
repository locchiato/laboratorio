let autos = require("./autos");

let concesionaria = {
    autos: autos,
    buscarAuto: function(patente) {
        for (let auto of this.autos)
            if (auto.patente === patente)
                return auto;
        return null;
    },
    venderAuto: function(patente) {
        this.buscarAuto(patente).vendido = true;
    },
    autosParaLaVenta: function() {
        let autos = [];
        for (let auto of this.autos)
            if (auto.vendido === false)
                autos.push(auto);
        return autos;
    },
    autosNuevos: function() {
        let autos = [];
        for (let auto of this.autosParaLaVenta())
            if (auto.km < 100)
                autos.push(auto);
        return autos;
    },
    listaDeVentas: function() {
        let precios = [];
        for (let auto of this.autos)
            if (auto.vendido === true)
                precios.push(auto.precio);
        return precios;
    },
    puedeComprar: function(auto, persona) {
        return persona.capacidadDePagoTotal > auto.precio &&
            persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas);
    },
    autosQuePuedeComprar: function(persona) {
        let autos = [];
        for (let auto of this.autosParaLaVenta())
            if (this.puedeComprar(auto, persona))
                autos.push(auto);
        return autos;
    }
};

/*
Una persona va a ser representada mediante un objeto literal 
de la siguiente forma:

{
nombre: "Juan",
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}

Una auto va a ser representada mediante un objeto literal 
de la siguiente forma:

{
  km: 0,
  anio: 2019,
  color: "Blanco",
  marca: "Toyota",
  cuotas: 14,
  modelo: "Corolla",
  patente: "JJK116",
  vendido: false
}

*/

module.exports = concesionaria;