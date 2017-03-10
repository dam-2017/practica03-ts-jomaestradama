"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadena_1 = require("./cadena");
var operaciones_1 = require("./operaciones");
var cadena = new cadena_1.Cadena("Algo");
var oper = new operaciones_1.Operaciones(1, 3);
console.log(cadena.cuentaVocales);
