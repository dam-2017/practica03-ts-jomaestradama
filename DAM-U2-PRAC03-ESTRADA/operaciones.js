"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operaciones = (function () {
    function Operaciones(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }
    Object.defineProperty(Operaciones.prototype, "suma", {
        get: function () {
            return this.n1 + this.n2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "resta", {
        get: function () {
            return this.n1 - this.n2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "factorial", {
        get: function () {
            var total = 1;
            for (var _i = 1; _i <= this.n1; _i++) {
                total = total * _i;
            }
            return total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "primo", {
        get: function () {
            var respuesta;
            if (this.n1 == 1 || this.n1 == 2) {
                return "Si es primo";
            }
            else {
                for (var _i = 2; _i <= this.n1; _i++) {
                    if (this.n1 % _i == 0) {
                        return "No es primo";
                    }
                    else {
                        return "Si es primo";
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return Operaciones;
}());
exports.Operaciones = Operaciones;
