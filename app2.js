const autos = require("./autos");

// version mas didactica
let concesionaria = {
    autos: autos,

    buscarAuto: function(patente) {
        for (let i = 0; i < this.autos.length; i++) {
            const autoSeleccionado = this.autos[i];
            if (autoSeleccionado.patente == patente) {
                return autoSeleccionado;
            }
        }
        return null;
    },
    venderAuto: function(patente) {
        let autoEncontrado = this.buscarAuto(patente);
        if (autoEncontrado != null) {
            autoEncontrado.vendido = true;
        }
        return null;
    },
    autosParaLaVenta: function() {
        let autosEnVenta = [];
        for (let i = 0; i < this.autos.length; i++) {
            const autoSeleccionado = this.autos[i];
            if (autoSeleccionado.vendido === false) {
                autosEnVenta.push(autoSeleccionado);
            }
        }
        return autosEnVenta;
    },
    autosNuevos: function() {
        let autosEnVenta = this.autosParaLaVenta();
        let autosNuevos = [];
        for (let i = 0; i < autosEnVenta.length; i++) {
            if (autosEnVenta[i].km < 100) {
                autosNuevos.push(autosEnVenta[i]);
            }
        }
        return autosNuevos;
    },
    listaDeVentas: function() {
        let precios = [];
        for (let i = 0; i < this.autos.length; i++) {
            const autoSeleccionado = this.autos[i];
            if (autoSeleccionado.vendido === true) {
                precios.push(autoSeleccionado.precio);
            }
        }
        return precios;
    },
    puedeComprar: function(auto, persona) {
        let cpc = persona.capacidadDePagoEnCuotas;
        let cpt = persona.capacidadDePagoTotal;
        return cpt > auto.precio && cpc > (auto.precio / auto.cuotas);
    },
    autosQuePuedeComprar: function(persona) {
        let autosPagables = [];
        let autosEnVenta = this.autosParaLaVenta();
        for (let i = 0; i < autosEnVenta.length; i++) {
            const autoSeleccionado = autosEnVenta[i];
            if (this.puedeComprar(autoSeleccionado, persona)) {
                autosPagables.push(autoSeleccionado);
            }
        }
        return autosPagables;
    }
};

console.log(concesionaria.autosNuevos());
module.exports = concesionaria;