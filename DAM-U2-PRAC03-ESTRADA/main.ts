import {Cadena}  from './cadena';
import {Operaciones} from './operaciones';

let cadena= new Cadena("La ruta nos aporto otro paso natural");
let oper= new Operaciones(1,3);
console.log(cadena.esPalindromo);
console.log(cadena.cuentaPalabras);
console.log(cadena.cuentaLetras);
console.log(cadena.cuentaVocales);