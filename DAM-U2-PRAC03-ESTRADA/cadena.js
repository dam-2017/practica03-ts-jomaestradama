"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cad) {
        this._cad = cad;
    }
    Object.defineProperty(Cadena.prototype, "esPalindromo", {
        get: function () {
            var resultado = "";
            var cadenaOriginal = this._cad.toLocaleLowerCase();
            var letraEspacios = cadenaOriginal.split("");
            var cadenaSinEspacios = "";
            for (var _i = 0; _i < letraEspacios.length; _i++) {
                if (letraEspacios[_i] != " ") {
                    cadenaSinEspacios += letraEspacios[_i];
                }
            }
            var letras = cadenaSinEspacios.split("");
            var letrasReves = cadenaSinEspacios.split("").reverse();
            var iguales = true;
            for (var _i = 0; _i < letras.length; _i++) {
                if (letras[_i] == letrasReves[_i]) {
                    // Todo bien
                }
                else {
                    // Alguna letra es distinta, por lo que ya no es un palindromo
                    iguales = false;
                }
            }
            if (iguales) {
                resultado += " es un palíndromo";
            }
            else {
                resultado += " no es un palíndromo";
            }
            return "La frase o palabra " + resultado;
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
            return "Son " + total_vocales + " vocales";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "cuentaLetras", {
        get: function () {
            var totalLetras;
            var cadenaOriginal = this._cad.toLocaleLowerCase();
            totalLetras = cadenaOriginal.length;
            return "Son " + totalLetras + " letras";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "cuentaPalabras", {
        get: function () {
            var totalPalabras;
            var cadenaOriginal = this._cad.toLocaleLowerCase();
            var letraEspacios = cadenaOriginal.split(" ");
            totalPalabras = letraEspacios.length;
            return "Son " + totalPalabras + " Palabras";
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
