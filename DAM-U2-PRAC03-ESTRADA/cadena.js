"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cad) {
        this._cad = cad;
    }
    Object.defineProperty(Cadena.prototype, "esPalindromo", {
        get: function () {
            var cadenaOriginal = this._cad.toLocaleLowerCase;
            return "Si es palindromo";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "cuentaVocales", {
        get: function () {
            var total_vocales = 0;
            var cadenaOriginal = this._cad.toLocaleLowerCase();
            var letraEspacios = cadenaOriginal.split("");
            for (var _i = 0; _i <= cadenaOriginal.length; _i++) {
                if (cadenaOriginal[_i] == 'a') {
                    total_vocales += 1;
                }
                else if (cadenaOriginal[_i] == 'e') {
                    total_vocales += 1;
                }
                else if (cadenaOriginal[_i] == 'i') {
                    total_vocales += 1;
                }
                else if (cadenaOriginal[_i] == 'o') {
                    total_vocales += 1;
                }
                else if (cadenaOriginal[_i] == 'u') {
                    total_vocales += 1;
                }
            }
            return total_vocales;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "cuentaLetras", {
        get: function () {
            var totalLetras;
            return totalLetras;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "cuentaPalabras", {
        get: function () {
            var totalPalabras;
            return totalPalabras;
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
