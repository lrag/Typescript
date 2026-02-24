"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Capitulo = void 0;
var Capitulo = /** @class */ (function () {
    function Capitulo(numero, titulo, texto) {
        if (numero === void 0) { numero = 0; }
        if (titulo === void 0) { titulo = ""; }
        if (texto === void 0) { texto = ""; }
        this._numero = numero;
        this._titulo = titulo;
        this._texto = texto;
    }
    Object.defineProperty(Capitulo.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("El número de capítulo no puede ser negativo");
            }
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Capitulo.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (value) {
            this._titulo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Capitulo.prototype, "texto", {
        get: function () {
            return this._texto;
        },
        set: function (value) {
            this._texto = value;
        },
        enumerable: false,
        configurable: true
    });
    Capitulo.prototype.imprimir_MAL = function () {
        console.log("Cap\u00EDtulo ".concat(this._numero, "\n"));
        console.log("".concat(this._titulo, "\n"));
        console.log("".concat(this._texto, "\n"));
    };
    Capitulo.prototype.formatearTexto = function () {
        return "Cap\u00EDtulo ".concat(this._numero, "\n\n").concat(this._titulo, "\n\n").concat(this._texto, "\n\n");
    };
    return Capitulo;
}());
exports.Capitulo = Capitulo;
