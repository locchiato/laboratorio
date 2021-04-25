const autos = require("./autos");

let concesionaria = {
    autos: autos,

    buscarAuto: function(patente) {
        for (let i = 0; i < this.autos.length; i++) {
            let auto = this.autos[i];
            if (auto.patente == patente) {
                return auto;
            }
            return null;
        }
    },
    venderAuto: function(patente) {
        let autoEncontrado = this.buscarAuto(patente)
        if (autoEncontrado != null) {
            autoEncontrado.vendido = true;
        }
    },
    autosParaLaVenta: function() {
        let autosNoVendidos = [];
        for (let i = 0; i < this.autos.length; i++) {
            const auto = this.autos[i];
            if (auto.vendido === false) {
                autosNoVendidos.push(auto)
            }
        }
        return autosNoVendidos;
    },
    autosNuevos: function() {
        let autosALaVenta = this.autosParaLaVenta();
        let arrAutosNuevos = [];
        for (let i = 0; i < autosALaVenta.length; i++) {
            if (autosALaVenta[i].km < 100) {
                arrAutosNuevos.push(autosALaVenta[i])
            }
        }
        return arrAutosNuevos
    }

};

console.log(
    concesionaria.autosNuevos());