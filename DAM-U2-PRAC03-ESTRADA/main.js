"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadena_1 = require("./cadena");
var operaciones_1 = require("./operaciones");
var cadena = new cadena_1.Cadena("La ruta nos aporto otro paso natural");
var oper = new operaciones_1.Operaciones(1, 3);
console.log(cadena.esPalindromo);
console.log(cadena.cuentaPalabras);
console.log(cadena.cuentaLetras);
console.log(cadena.cuentaVocales);
